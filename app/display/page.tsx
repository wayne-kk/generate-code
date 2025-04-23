'use client';
import { nanoid } from 'nanoid';
import CombinationApp, { CombinationAppProps } from "@/component/CombinationApp";
import { useEffect, useState } from "react";


export default function Display() {
    const [data, setData] = useState<CombinationAppProps>({});
    const [color, setColor] = useState('#87CEEB');

    useEffect(() => {
        const pageDefaultData = JSON.parse(localStorage.getItem('pageDefaultData') ?? '{}');
        const mockSections = [
            { sectionName: "Navigation", sectionDescription: "以引人注目的视觉效果和简洁的关键信息，展示我们的服务核心价值，吸引用户注意。" },
            { sectionName: "Hero", sectionDescription: "以引人注目的视觉效果和简洁的关键信息，展示我们的服务核心价值，吸引用户注意。" },
            { sectionName: "Team", sectionDescription: "介绍我们的专业团队成员，包括他们的照片、姓名和职位，展示团队的实力与可信度。" },
            { sectionName: "Gallery", sectionDescription: "通过精选的成功案例图片和视频，展示我们为客户创造的成果和价值。" },
            { sectionName: "Testimonial", sectionDescription: "展示来自客户的真实评价，增强用户对我们服务的信任感和认可度。" },
            { sectionName: "LogoClouds", sectionDescription: "展示合作伙伴的标志，强调我们与知名品牌或公司的合作关系。" },
            { sectionName: "Contact", sectionDescription: "提供联系方式和在线表单，方便用户与我们取得联系，获取更多信息或支持。" },
            { sectionName: "Footer", sectionDescription: "以引人注目的视觉效果和简洁的关键信息，展示我们的服务核心价值，吸引用户注意。" }
        ];
        const children: string[] = [];
        const mockBlocksMap: Record<string, any> = {};

        async function mockBlockChildren() {
            for (const section of mockSections) {
                const { sectionName, sectionDescription } = section;
                const id = nanoid(); // 默认长度为 21
                children.push(id);

                const blockChildren = await fetch(`/api/blocks?keyword=${sectionName}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                const blockData = await blockChildren.json();

                mockBlocksMap[id] = {
                    code: blockData.data.code,
                    props: JSON.parse(blockData.data.props),
                };
            }
        }

        if (!Object.keys(pageDefaultData).length) {
            mockBlockChildren().then(() => {
                pageDefaultData.children = children;
                pageDefaultData.blocksMap = mockBlocksMap;
                console.log('pageDefaultData', pageDefaultData);
                setData(pageDefaultData);
            });
        } else {
            setData(pageDefaultData);
        }

    }, []);




    if (!data) {
        return <div>Loading...</div>; // 如果数据未加载完成，显示 Loading
    }

    return (
        <div id="preview-viewport" className="relative">
            {/* 颜色块，点击时显示 ChromePicker */}

            <CombinationApp {...data} />
        </div>
    );
}
