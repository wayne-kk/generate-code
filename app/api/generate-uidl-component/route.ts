import { createReactComponentGenerator, ReactStyleVariation } from '@teleporthq/teleport-component-generator-react';
import { NextResponse } from 'next/server';
import { componentDefinition } from './uidl-copy'


export async function GET() {
    const generator = createReactComponentGenerator({ variation: ReactStyleVariation.InlineStyles });
    const reactComponentStr = await generator.generateComponent(componentDefinition.componentUIDLs[0]);
    return NextResponse.json({ component: reactComponentStr });
}
