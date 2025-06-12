import React from 'react';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import { Input } from '@ui/input';
import { Textarea } from '@ui/textarea';
import { Button } from '@ui/button';
import { Card, CardContent } from '@ui/card';
import { Label } from '@ui/label';
import { toast } from "sonner";

export interface IOfficehoursItem {
  id: number
  icon: string
  title: string
  detail: string
}

export interface IContactProps {
  title: string
  description: string
  officeHours: IOfficehoursItem[]
  messageFormTitle?: string
  messageFormDescription?: string
  onMessageSubmit?: (values: MessageFormValues) => Promise<void> | void
  messageFormLoading?: boolean
}

export interface MessageFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC<IContactProps> = ({
  title = 'Get in Touch with Our Design Studio',
  description = 'Our team is ready to assist you with outstanding design solutions.',
  officeHours = [
    { id: 1, icon: 'fa-solid fa-clock', title: 'Office Hours', detail: 'Monday-Friday\n8:00 am to 5:00 pm' },
    { id: 2, icon: 'fa-solid fa-location-dot', title: 'Our Address', detail: '123 Design St.\nCreativity City, 12345' },
    { id: 3, icon: 'fa-solid fa-phone', title: 'Contact Us', detail: '+1-800-DESIGN\n+1-800-STUDIO' },
  ],
  messageFormTitle = '留言板',
  messageFormDescription = '欢迎留下您的宝贵意见或建议，我们会尽快回复您。',
  onMessageSubmit,
  messageFormLoading = false,
}) => {
  const [formData, setFormData] = React.useState<MessageFormValues>({
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
        await onMessageSubmit?.(formData);
        toast.success("留言已提交，感谢您的反馈！");
        setFormData({ name: '', email: '', message: '' });
      } catch (e) {
        toast.error("提交失败，请稍后重试。");
      }
    }
  };

  return (
    <section className="relative py-6 overflow-hidden bg-slate-900 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* 上半部分：联系信息 */}
        <div className="flex flex-col">
          <div className="flex w-full flex-col">
            <div>
              <h2 className="TITLE-PRIMARY text-4xl font-semibold text-white md:text-5xl">
                <EditableText propKey="title">{title}</EditableText>
              </h2>
              <p className="DESC mt-6 font-normal text-white/70">
                <EditableText propKey="description">{description}</EditableText>
              </p>
            </div>
            <ul className="mt-16 flex flex-col items-center justify-between gap-5 md:flex-row">
              {officeHours.map((item, index) => (
                <li key={item.id} className="mt-4 flex items-center w-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 text-white bg-sky-500 rounded-full shrink-0">
                    <EditableIcon propKey={`officeHours_${index}_icon`} icon={item.icon} iconLibrary="FontAwesome" className={`text-base text-white`}/>
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="TITLE-SECONDARY font-semibold text-white/70">
                      <EditableText propKey={`officeHours_${index}_title`}>{item.title}</EditableText>
                    </h3>
                    <p className="DESC mt-1 text-sm font-normal text-white/70 whitespace-pre-line">
                      <EditableText propKey={`officeHours_${index}_detail`}>{item.detail}</EditableText>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 下半部分：留言表单 */}
        <div className="mt-20 flex justify-center items-center">
          <Card className="w-full max-w-md shadow-lg border-0 rounded-2xl bg-white/90 dark:bg-slate-900/80">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white/90">{messageFormTitle}</h2>
                <p className="mt-2 text-slate-600 dark:text-white/60 text-base">{messageFormDescription}</p>
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
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="请输入您的留言"
                    className="rounded-lg py-2 px-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-visible:border-sky-400 focus-visible:ring-sky-400 resize-none min-h-[100px]"
                    maxLength={500}
                  />
                  <div className="text-xs text-right text-slate-500">
                    {formData.message.length}/500
                  </div>
                  {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={messageFormLoading}
                  className="w-full bg-sky-500 hover:bg-sky-600 border-0 rounded-lg font-semibold text-base py-2 transition-all duration-200"
                >
                  {messageFormLoading ? (
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
      </div>
    </section>
  );
};

export default Contact;
