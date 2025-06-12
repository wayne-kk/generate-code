import React from 'react';
import EditableText from '@ui/EditableText';
import EditableIcon from '@ui/EditableIcon';
import { Input } from '@ui/input';
import { Textarea } from '@ui/textarea';
import { Button } from '@ui/button';
import { Card, CardContent } from '@ui/card';
import { Label } from '@ui/label';
import { toast } from "sonner";

export interface IOfficesItem {
  title: string
  description: string
  address: string
  email: string
  iconLocation: string
  iconEmail: string
}

export interface IContactProps {
  offices: IOfficesItem[]
  onMessageSubmit?: (values: MessageFormValues) => Promise<void> | void
  messageFormLoading?: boolean
}

export interface MessageFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC<IContactProps> = ({
  offices = [
    {
      title: 'Design Studio London Office',
      description: 'Get in touch with our creative team in London.',
      address: '8502 Preston Rd. Inglewood, Maine 98380',
      email: 'london@designstudio.com',
      iconLocation: 'fa-solid fa-location-dot',
      iconEmail: 'fa-solid fa-envelope',
    },
    {
      title: 'Design Studio New York Office',
      description: 'Discuss your project with our experts in New York.',
      address: '4517 Washington Ave. Manchester, Kentucky',
      email: 'ny@designstudio.com',
      iconLocation: 'fa-solid fa-location-dot',
      iconEmail: 'fa-solid fa-envelope',
    },
    {
      title: 'Design Studio Singapore Office',
      description: 'Start your journey with us in Singapore.',
      address: '3517 W. Gray St. Utica, Pennsylvania 57867',
      email: 'singapore@designstudio.com',
      iconLocation: 'fa-solid fa-location-dot',
      iconEmail: 'fa-solid fa-envelope',
    },
  ],
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
    <section className="py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* 办公室信息 */}
        <div className="grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 xl:gap-x-20">
          {offices.map((office, index) => (
            <div key={index}>
              <h3 className="TITLE-PRIMARY text-2xl font-semibold text-slate-900 dark:text-white/90">
                <EditableText propKey={`offices_${index}_title`}>{office.title}</EditableText>
              </h3>
              <p className="DESC mt-3 text-base font-normal text-slate-700 dark:text-white/70">
                <EditableText propKey={`offices_${index}_description`}>{office.description}</EditableText>
              </p>
              <div className="mt-10 space-y-5">
                <div className="flex items-center">
                  <EditableIcon propKey={`offices_${index}_iconLocation`} icon={office.iconLocation} iconLibrary="FontAwesome" className="text-sky-500 dark:text-white/70 text-base"/>
                  <span className="TEXT-CONTENT block ml-3 text-base font-medium text-slate-900 dark:text-white/90">
                    <EditableText propKey={`offices_${index}_address`}>{office.address}</EditableText>
                  </span>
                </div>
                <div className="flex items-center">
                  <EditableIcon propKey={`offices_${index}_iconEmail`} icon={office.iconEmail} iconLibrary="FontAwesome" className="text-sky-500 dark:text-white/70 text-base"/>
                  <span className="TEXT-CONTENT block ml-3 text-base font-medium text-slate-900 dark:text-white/90">
                    <EditableText propKey={`offices_${index}_email`}>{office.email}</EditableText>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 留言表单 */}
        <div className="flex justify-center mt-16">
          <Card className="w-full max-w-md shadow-lg border-0 rounded-2xl bg-white/90 dark:bg-slate-900/80">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-semibold text-slate-700 dark:text-white/80">
                    姓名
                  </Label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="您的姓名"
                      className="rounded-lg py-2 px-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-visible:border-sky-400 focus-visible:ring-sky-400"
                    />
                  </div>
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-semibold text-slate-700 dark:text-white/80">
                    邮箱
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="您的邮箱"
                      className="rounded-lg py-2 px-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-visible:border-sky-400 focus-visible:ring-sky-400"
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
                    <span>提交留言</span>
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
