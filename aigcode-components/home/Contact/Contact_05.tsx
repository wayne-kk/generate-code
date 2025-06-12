import React from 'react';
import EditableButton from '@ui/EditableButton';
import EditableText from '@ui/EditableText';
import { Input } from '@ui/input';
import { Textarea } from '@ui/textarea';
import { Button } from '@ui/button';
import { Card, CardContent } from '@ui/card';
import { Label } from '@ui/label';
import { toast } from "sonner";

export interface ISociallinksItem {
  name: string
  url: string
}

export interface IContactProps {
  greeting: string
  mainTitle: string
  workingHours: string
  workingHoursDetails: string
  email: string
  title: string
  socialLinks: ISociallinksItem[]
  formTitle?: string
  formDescription?: string
  onFormSubmit?: (values: MessageFormValues) => Promise<void> | void
  formLoading?: boolean
}

export interface MessageFormValues {
  name: string;
  email: string;
  message: string;
}

const MessageForm: React.FC<{
  title?: string;
  description?: string;
  onSubmit?: (values: MessageFormValues) => Promise<void> | void;
  loading?: boolean;
}> = ({
  title = '留言板',
  description = '欢迎留下您的宝贵意见或建议，我们会尽快回复您。',
  onSubmit,
  loading = false,
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
        await onSubmit?.(formData);
        toast.success("留言已提交，感谢您的反馈！");
        setFormData({ name: '', email: '', message: '' });
      } catch (e) {
        toast.error("提交失败，请稍后重试。");
      }
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-0 rounded-2xl bg-white/90 dark:bg-slate-900/80">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white/90">{title}</h2>
          <p className="mt-2 text-slate-600 dark:text-white/60 text-base">{description}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-semibold text-slate-700 dark:text-white/80">
              姓名
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="您的姓名"
              className="rounded-lg py-2 px-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-visible:border-sky-400 focus-visible:ring-sky-400"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="font-semibold text-slate-700 dark:text-white/80">
              邮箱
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="您的邮箱"
              className="rounded-lg py-2 px-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-visible:border-sky-400 focus-visible:ring-sky-400"
            />
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
            disabled={loading}
            className="w-full bg-sky-500 hover:bg-sky-600 border-0 rounded-lg font-semibold text-base py-2 transition-all duration-200"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                提交中...
              </div>
            ) : (
              <span>提交留言</span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const Contact: React.FC<IContactProps> = ({
  greeting = `Say hello to Our Design Studio`,
  mainTitle = `Interested in collaborating?`,
  workingHours = `Monday-Friday, 9:00 am to 6:00 pm`,
  workingHoursDetails = `Our team is available for your queries.`,
  email = `connect@designstudio.com`,
  title = `Send us a message`,
  socialLinks = [
    { name: `Instagram`, url: `https://instagram.com` },
    { name: `Medium`, url: `https://medium.com` },
    { name: `Facebook`, url: `https://facebook.com` },
    { name: `Behance`, url: `https://behance.net` },
    { name: `LinkedIn`, url: `https://linkedin.com` },
    { name: `Dribbble`, url: `https://dribbble.com` },
  ],
  formTitle,
  formDescription,
  onFormSubmit,
  formLoading,
}) => {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-900 to-gray-600 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto px-4 max-w-7xl">
        {/* 信息区 */}
        <div className="grid items-end max-w-5xl grid-cols-1 mx-auto md:grid-cols-2 gap-y-10 gap-x-48">
          <div>
            <p className="DESC text-base font-semibold text-white/60"><EditableText propKey="greeting">{greeting}</EditableText></p>
            <h2 className="TITLE-PRIMARY mt-6 text-4xl font-semibold text-white md:text-5xl">
              <EditableText propKey="mainTitle">{mainTitle}</EditableText>
            </h2>
            <p className="DESC mt-10 text-base font-normal  text-white/90 md:mt-40">
              <EditableText propKey="workingHours">{workingHours}</EditableText>
              <span className="block text-white/60">
                <EditableText propKey="workingHoursDetails">{workingHoursDetails}</EditableText>
              </span>
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <p className="DESC text-xs font-semibold tracking-widest text-white/60 uppercase">
                <EditableText propKey="title">{title}</EditableText>
              </p>
              <p className="TEXT-LINK text-base font-normal">
                <EditableButton className="hover:underline text-white/90" href={`mailto:${email}`} title={email}>
                  <EditableText propKey="email">{email}</EditableText>
                </EditableButton>
              </p>
            </div>
            <div className="mt-10 md:mt-24">
              <p className="DESC text-xs font-semibold tracking-widest text-white/60 uppercase">Follow Us</p>
              <div className="grid grid-cols-2 mt-5 gap-y-4 gap-x-8">
                {socialLinks.map((link, index) => (
                  <p key={index} className="TEXT-LINK text-base font-normal">
                    <EditableButton className="hover:underline text-white/90" href={link.url} title={link.name}>
                      <EditableText propKey={`socialLinks_${index}_name`}>{link.name}</EditableText>
                    </EditableButton>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* 表单区 */}
        <div className="mt-16">
          <MessageForm
            title={formTitle}
            description={formDescription}
            onSubmit={onFormSubmit}
            loading={formLoading}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
