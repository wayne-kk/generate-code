import React from 'react';
import EditableText from '@ui/EditableText'
import EditableImg from '@ui/EditableImg'

export interface DataItem {
    imgUrl: string;
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
    [key: string]: string; // 强制所有值为string类型

  }
export interface Table_01Props {
    title: string
    description: string
    tr:string[]
    data: DataItem[]
  }
  
const Table_01: React.FC<Table_01Props> =  ({
    title = `Packages111`,
    description = `Meet the creative minds behind our successful projects.`,
    tr = [`Package`, `Project`, `Detail`, `Price`],
    data = [
        {
            imgUrl: `https://images.unsplash.com/photo-1670850664664-d8ed42d767fa?fm=jpg&q=60&w=600&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            col1: `Starter Package`,
            col2: `Logo & Brand Identity`,
            col3: `Up to 3 Concepts`,
            col4: `5 Revisions`,
            col5: `$499`,
        },
        {
            imgUrl: `https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            col1: `Professional Website`,
            col2: `Responsive Design`,
            col3: `Up to 10 Pages`,
            col4: `SEO & Analytics Setup`,
            col5: `$2,999`,
        },
        {
            imgUrl: `https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            col1: `Mobile App Design`,
            col2: `iOS & Android`,
            col3: `User Interface Design`,
            col4: `User Experience Review`,
            col5: `$4,999`,
        }
    ],
}) => {
    return (
        <div className="w-full max-w-7xl mx-auto py-10 px-4">
            <div className="max-w-lg">
                <h3 className="TITLE-PRIMARY text-4xl font-extrabold text-lg sm:text-2xl dark:text-white/80">
                    <EditableText propKey={`title`}>{title}</EditableText>
                </h3>
                <p className="DESC text-slate-700 mt-2 text-base dark:text-white/70">
                    <EditableText propKey={`description`}>
                        {description}
                    </EditableText>
                </p>
            </div>
            <div className="mt-8 shadow-sm border border-black/10 dark:border-white/10 rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white/80 font-medium border-b border-black/10 dark:border-white/10">
                        <tr>
                            {
                                tr.map((item, idx) => (
                                    <th key={idx} className="py-3 px-6">
                                        <EditableText propKey={`tr_${idx}`}>{item}</EditableText>
                                    </th>
                                ))}
                        </tr>
                    </thead>
                    <tbody className="text-slate-900 dark:text-white/70 divide-y divide-black/10 dark:divide-white/10">
                        {data.map((item, idx) => (
                            <tr key={idx}>
                                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                    <EditableImg
                                        propKey={`data_${idx}_imgUrl`}
                                        className="IMAGE w-10 h-10 rounded-full bg-slate-100 object-cover aspect-[1/1]"
                                        src={item.imgUrl}
                                        alt={item.imgUrl}
                                    />
                                    <div>
                                        <span className="block text-slate-900 dark:text-white/80 text-sm font-medium">
                                            <EditableText propKey={`data_${idx}_col1`}>{item.col1}</EditableText>
                                        </span>
                                        <span className="block text-slate-700 dark:text-white/70 text-xs">
                                            <EditableText propKey={`data_${idx}_col2`}>{item.col2}</EditableText>
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <EditableText propKey={`data_${idx}_col3`}>{item.col3}</EditableText>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <EditableText propKey={`data_${idx}_col4`}>{item.col4}</EditableText>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <EditableText propKey={`data_${idx}_col5`}>{item.col5}</EditableText>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Table_01