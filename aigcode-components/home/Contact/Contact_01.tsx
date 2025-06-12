import React from 'react';
import AnimateInView from '@ui/AnimateInView';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';
import { Input } from '@ui/input';
import { Textarea } from '@ui/textarea';
import { Button } from '@ui/button';
import { Card, CardContent } from '@ui/card';
import { Label } from '@ui/label';
import { toast } from "sonner";

export interface IOfficehoursItem {
  id: string
  icon: string
  title: string
  texts: string[]
}

export interface IContactProps {
  title: string
  officeHours: IOfficehoursItem[]
  imageUrl: string
  formTitle?: string
  formDescription?: string
  onFormSubmit?: (values: { name: string; email: string; message: string }) => Promise<void> | void
  formLoading?: boolean
}

const Contact: React.FC<IContactProps> = ({
  title = `Get in touch with us & let's talk.`,
  officeHours = [
    {
      id: 'hours1',
      icon: 'fa-solid fa-clock',
      title: 'Office Hours',
      texts: ['Monday-Friday', '8:00 am to 5:00 pm'],
    },
    {
      id: 'location1',
      icon: 'fa-solid fa-location-dot',
      title: 'Our Address',
      texts: ['8502 Preston Rd. Ingle', 'Maine 98380, USA'],
    },
    {
      id: 'location2',
      icon: 'fa-solid fa-building',
      title: 'Office 2',
      texts: ['8502 Preston Rd. Ingle', 'Maine 98380, USA'],
    },
    {
      id: 'contact',
      icon: 'fa-solid fa-phone',
      title: 'Get In Touch',
      texts: ['+1-246-888-0653', '+1-222-632-0194'],
    },
  ],
  imageUrl = `https://source.unsplash.com/800x700/?office,contact`,
  formTitle = '留言板',
  formDescription = '欢迎留下您的宝贵意见或建议，我们会尽快回复您。',
  onFormSubmit,
  formLoading = false,
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '邮箱格式不正确';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '请输入留言内容';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 清除对应字段的错误
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        await onFormSubmit?.(formData);
        toast.success("留言已提交，感谢您的反馈！");
        setFormData({ name: '', email: '', message: '' });
      } catch (e) {
        toast.error("提交失败，请稍后重试。");
      }
    }
  };

  return (
    <section className="relative py-12 overflow-hidden bg-slate-50 sm:py-16 lg:py-20 xl:py-24 dark:bg-slate-800">
      <div className="absolute bottom-0 dark:bg-slate-700 left-0 lg:w-[50%] bg-sky-100 lg:h-[75%] hidden lg:block"></div>
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-stretch grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-36">
          {/* 左侧：表单 */}
          <div className="flex items-center justify-center lg:order-1">
            <Card className="w-full max-w-md shadow-lg border-0 rounded-2xl bg-white/90 dark:bg-slate-900/80">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white/90">{formTitle}</h2>
                  <p className="mt-2 text-slate-600 dark:text-white/60 text-base">{formDescription}</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold text-slate-700 dark:text-white/80">
                      姓名
                    </Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400">
                        <EditableIcon icon="fa-solid fa-user" />
                      </div>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="您的姓名"
                        className="rounded-lg py-2 pl-10 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-visible:border-sky-400 focus-visible:ring-sky-400"
                      />
                    </div>
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold text-slate-700 dark:text-white/80">
                      邮箱
                    </Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400">
                        <EditableIcon icon="fa-solid fa-envelope" />
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="您的邮箱"
                        className="rounded-lg py-2 pl-10 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-visible:border-sky-400 focus-visible:ring-sky-400"
                      />
                    </div>
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold text-slate-700 dark:text-white/80">
                      留言内容
                    </Label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="请输入您的留言"
                        className="rounded-lg py-2 px-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-visible:border-sky-400 focus-visible:ring-sky-400 resize-none min-h-[100px]"
                        maxLength={500}
                      />
                      <div className="text-xs text-right text-slate-500 mt-1">
                        {formData.message.length}/500
                      </div>
                    </div>
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={formLoading}
                    className="w-full bg-sky-500 hover:bg-sky-600 border-0 rounded-lg font-semibold text-base py-2 transition-all duration-200"
                  >
                    {formLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        提交中...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span>提交留言</span>
                        <EditableIcon icon="fa-solid fa-paper-plane" className="ml-2" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          {/* 右侧：联系信息和图片 */}
          <div className="xl:pl-8 lg:order-2 flex flex-col h-full">
            <h2 className="TITLE-PRIMARY text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-white/90">
              <EditableText propKey="title">{title}</EditableText>
            </h2>
            <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 gap-y-8 sm:gap-12 xl:gap-x-16 sm:mt-16 lg:mt-20">
              {officeHours.map((item, index) => {
                const { id, icon, title, texts } = item;
                return (
                  <div key={id} className="flex items-start">
                    <EditableIcon propKey={`officeHours_${index}_icon`} icon={icon} iconLibrary="FontAwesome" className="text-lg text-sky-500 dark:text-white/90 shrink-0"/>
                    <div className="ml-4">
                      <h3 className="TITLE-SECONDARY text-lg font-medium text-slate-900 dark:text-white/90">
                        <EditableText propKey={`officeHours_${index}_title`}>{title}</EditableText>
                      </h3>
                      <p className="DESC mt-4 text-sm font-normal text-slate-600 dark:text-white/90">
                        {texts.map((line, lineIndex) => (
                          <div key={line}>
                            <EditableText propKey={`officeHours_${index}_texts_${lineIndex}`}>{line}</EditableText>
                            <br />
                          </div>
                        ))}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="relative px-6 lg:px-0 mt-12">
              <div className="absolute bottom-0 left-0 w-full dark:bg-slate-700 -mb-12 bg-sky-100 sm:h-96 sm:-mb-16 h-72 lg:hidden"></div>
              <AnimateInView type="rise">
                <EditableImg propKey="imageUrl" className="IMAGE relative object-cover w-full h-full rounded-2xl bg-slate-100 aspect-[4/3]" src={imageUrl} alt={imageUrl} />
              </AnimateInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
