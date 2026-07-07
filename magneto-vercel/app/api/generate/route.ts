import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { product, audience, outcome, tone } = await req.json();

    const prompt = `You are Magneto, a world-class direct-response copywriter.
Product: ${product}
Audience: ${audience}
Desired outcome: ${outcome}
Tone: ${tone}

Write exactly 15 marketing hooks. Rules:
- 8 to 12 words each
- Punchy, outcome-centric, no quotes, no numbers
- One per line
- No intro or explanation`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.9,
    });

    const text = completion.choices[0]?.message?.content || '';
    const hooks = text.split('\n').map(l => l.replace(/^[-\d\.\s]+/, '').trim()).filter(Boolean).slice(0,15);

    return NextResponse.json({ hooks });
  } catch (e:any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
