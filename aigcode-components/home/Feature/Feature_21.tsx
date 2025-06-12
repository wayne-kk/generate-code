import React from 'react';
import EditableButton from '@ui/EditableButton';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableImg from '@ui/EditableImg';

export interface IIFeaturePropsPrimarybutton {
  textAttr: string
  textAttrLink: string

}

export interface IFeatureProps {
  title: string
  creativeBg01: string
  creative01: string
  name1: string
  username1: string
  creativeBg02: string
  creative02: string
  name2: string
  username2: string
  creativeBg03: string
  creative03: string
  name3: string
  username3: string
  creativeBg04: string
  creative04: string
  name4: string
  username4: string
  creativesImage: string
  subHeader: string
  description: string
  primaryButton: IIFeaturePropsPrimarybutton
}

const Feature: React.FC<IFeatureProps> = ({
  title = "Join over 2M creatives from around the world",
  creativeBg01 = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  creative01 = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  name1 = "Ethan",
  username1 = "@Detective",
  creativeBg02 = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  creative02 = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  name2 = "Olivia",
  username2 = "@Astronaut",
  creativeBg03 = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  creative03 = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  name3 = "Noah",
  username3 = "@Chef",
  creativeBg04 = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  creative04 = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  name4 = "Emma",
  username4 = "@Pilot",
  creativesImage = "https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  subHeader = "More than a community",
  description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking.",
  primaryButton = {
    textAttr: "join The Community",
    textAttrLink: '/',
  }
}) =>{
  return (
      <section className="w-full bg-white dark:bg-slate-900 px-6 py-24 md:px-8 md:py-32">
        <AnimateInView>
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <EditableText propKey={"title"} className="TITLE-PRIMARY text-4xl font-bold text-slate-900 dark:text-slate-50 md:text-5xl">{title}</EditableText>
          </div>
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0">
            <div className="md:w-1/2">
              <div className="flex space-x-6">
                <div className="w-1/2 space-y-6">
                  <div className="w-full text-center border border-black/10 dark:border-white/10">
                    <EditableImg propKey={"creativeBg01"} src={creativeBg01} className="IMAGE w-full h-auto aspect-[4/1] opacity-60 object-cover"/>
                    <div className="px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <EditableImg propKey={"creative01"} src={creative01} className="IMAGE w-16 h-16 rounded-full aspect-[1/1] object-cover"/>
                      </div>
                      <div className="mb-5 flex flex-col gap-1">
                        <EditableText propKey={"name1"} className="TEXT-CONTENT inline-block font-bold text-xl text-slate-900 dark:text-slate-50">{name1}</EditableText>
                        <EditableText propKey={"username1"} className="TEXT-CONTENT text-sm text-slate-500">{username1}</EditableText>
                      </div>

                    </div>
                  </div>
                  <div className="w-full text-center border border-black/10 dark:border-white/10">
                    <EditableImg propKey={"creativeBg02"} src={creativeBg02} className="IMAGE w-full h-auto aspect-[4/1] opacity-60 object-cover"/>
                    <div className="px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <EditableImg propKey={"creative02"} src={creative02} className="IMAGE w-16 h-16 rounded-full aspect-[1/1] object-cover"/>
                      </div>
                      <div className="mb-5 flex flex-col gap-1">
                        <EditableText propKey={"name2"} className="TEXT-CONTENT inline-block font-bold text-xl text-slate-900 dark:text-slate-50">{name2}</EditableText>
                        <EditableText propKey={"username2"} className="TEXT-CONTENT text-sm text-slate-500">{username2}</EditableText>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="w-1/2 mt-6 space-y-6">
                  <div className="w-full text-center border border-black/10 dark:border-white/10">
                    <EditableImg propKey={"creativeBg03"} src={creativeBg03} className="IMAGE w-full h-auto aspect-[4/1] opacity-60 object-cover"/>
                    <div className="px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <EditableImg propKey={"creative03"} src={creative03} className="IMAGE w-16 h-16 rounded-full aspect-[1/1] object-cover"/>
                      </div>
                      <div className="mb-5 flex flex-col gap-1">
                        <EditableText propKey={"name3"} className="TEXT-CONTENT inline-block font-bold text-xl text-slate-900 dark:text-slate-50">{name3}</EditableText>
                        <EditableText propKey={"username3"} className="TEXT-CONTENT text-sm text-slate-500">{username3}</EditableText>
                      </div>

                    </div>
                  </div>
                  <div className="w-full text-center border border-black/10 dark:border-white/10">
                    <EditableImg propKey={"creativeBg04"} src={creativeBg04} className="IMAGE w-full h-auto aspect-[4/1] opacity-60 object-cover"/>
                    <div className=" px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <EditableImg propKey={"creative04"} src={creative04} className="IMAGE w-16 h-16 rounded-full aspect-[1/1] object-cover"/>
                      </div>
                      <div className="mb-5 flex flex-col gap-1">
                        <EditableText propKey={"name4"} className="TEXT-CONTENT inline-block font-bold text-xl text-slate-900 dark:text-slate-50">{name4}</EditableText>
                        <EditableText propKey={"username4"} className="TEXT-CONTENT text-sm text-slate-500">{username4}</EditableText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10 lg:pl-20">
              <div className="w-full flex flex-col items-center gap-6 text-center md:text-left md:items-start">
                <EditableImg propKey={"creativesImage"} src={creativesImage} className="IMAGE w-full h-auto aspect-[4/3] object-cover mb-12"/>
                <EditableText propKey={"subHeader"} className="TITLE-SECONDARY text-4xl font-semibold text-slate-900 dark:text-slate-50">{subHeader}</EditableText>
                <EditableText propKey={"description"} className="DESC text-xl text-slate-600 dark:text-slate-400">{description}</EditableText>
                <EditableButton className="BTN-PRIMARY w-fit text-white bg-sky-500 py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-sky-600 mt-6" href={primaryButton.textAttrLink}>
                    <EditableText propKey={"primaryButton_textAttr"}>{primaryButton.textAttr}</EditableText>
                </EditableButton>
              </div>
            </div>
          </div>
        </div>
        </AnimateInView>
      </section>
  )
}


export default Feature;