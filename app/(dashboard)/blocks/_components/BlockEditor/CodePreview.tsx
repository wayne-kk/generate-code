import CodeTsxLoader from '@/_components/@codeLoader/CodeTsxLoader';
import AnimateInView from '@/_components/@base/AnimateInView';
import EditableButton from '@/_components/@base/EditableButton';
import EditableIcon from '@/_components/@base/EditableIcon';
import EditableImg from '@/_components/@base/EditableImg';
import EditableText from '@/_components/@base/EditableText';
import { AnimatePresence, motion } from 'framer-motion';
import { throttle } from 'lodash-es';
import { Carousel } from 'react-responsive-carousel';
import Marquee from '@/_components/@base/Marquee';
import Overflow from '@/_components/@base/Overflow';
import { Button } from '@/_components/@ui/button';
import { Card, CardContent } from "@/_components/@ui/card";
import { Input } from "@/_components/@ui/input";
import { Textarea } from "@/_components/@ui/textarea";
import {
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField
} from "@/_components/@ui/form";
import { Label } from '@/_components/@ui/label';
import { toast } from 'sonner';
import { gsap } from 'gsap';

interface CodePreviewProps {
    code: string | null;
}

const CodePreview = ({ code }: CodePreviewProps) => {
    if (!code) return null;

    return (
        <CodeTsxLoader
            code={code}
            customComponents={{
                AnimateInView,
                EditableText,
                EditableButton,
                Overflow,
                EditableIcon,
                Carousel,
                EditableImg,
                Marquee,
                motion,
                throttle,
                AnimatePresence,
                Button,
                Card,
                CardContent,
                Input,
                Textarea,
                useFormField,
                Form,
                FormItem,
                FormLabel,
                FormControl,
                FormDescription,
                FormMessage,
                FormField,
                Label,
                toast,
                gsap
            }}
            props={{}}
        />
    );
};

export default CodePreview;
