import CodeTsxLoader from '@/_components/@codeLoader/CodeTsxLoader';
import AnimateInView from '@ui/AnimateInView';
import EditableButton from '@ui/EditableButton';
import EditableIcon from '@ui/EditableIcon';
import EditableImg from '@ui/EditableImg';
import EditableText from '@ui/EditableText';
import { AnimatePresence, motion } from 'framer-motion';
import { throttle } from 'lodash-es';
import { Carousel } from 'react-responsive-carousel';
import Marquee from '@ui/Marquee';
import Overflow from '@ui/Overflow';
import { Button } from '@ui/button';
import { Card, CardContent, CardAction, CardFooter, CardHeader, CardTitle, CardDescription } from "@ui/card";
import { Input } from "@ui/input";
import { Textarea } from "@ui/textarea";
import { ToggleGroup, ToggleGroupItem } from '@ui/toggle-group';
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption
} from '@ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';

import {
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField
} from "@ui/form";
import { Label } from '@ui/label';
import { toast } from 'sonner';
import { gsap } from 'gsap';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/select';
import { useForm } from 'react-hook-form';


import {
    LineChart, Line, PieChart, Pie, BarChart, Bar, AreaChart, Area,
    XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid,
    Cell
} from 'recharts';
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
                CardAction,
                CardFooter,
                CardHeader,
                CardTitle,
                CardDescription,
                ToggleGroup,
                ToggleGroupItem,
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
                Select,
                SelectItem,
                SelectTrigger,
                SelectContent,
                SelectValue,
                Label,
                toast,
                gsap,
                useForm,
                LineChart,
                Line,
                PieChart,
                Pie,
                BarChart,
                Bar,
                XAxis,
                YAxis,
                Tooltip,
                Legend,
                Area,
                CartesianGrid,
                AreaChart,
                ResponsiveContainer,
                Cell,
                Tabs, TabsContent, TabsList, TabsTrigger,
                Table,
                TableHeader,
                TableBody,
                TableFooter,
                TableHead,
                TableRow,
                TableCell,
                TableCaption
            }}
            props={{}}
        />
    );
};

export default CodePreview;
