import { createReactComponentGenerator, ReactStyleVariation } from '@teleporthq/teleport-component-generator-react';
import { NextResponse } from 'next/server';
import { initUidl } from './uidl';
import generateCompleteUIDL from './llm';


export async function GET() {
    const result = await generateCompleteUIDL('生成一个宠物网站', JSON.stringify(initUidl))
    const componentDefinition = result.choices[0].message.content.replace('```json', '').replace('```', '')
    console.log('componentDefinition', componentDefinition)
    const generator = createReactComponentGenerator({ variation: ReactStyleVariation.InlineStyles });
    const reactComponentStr = await generator.generateComponent(JSON.parse(componentDefinition));
    return NextResponse.json({ component: reactComponentStr });
}
