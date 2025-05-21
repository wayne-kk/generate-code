import EventEmitter from 'eventemitter3';

// 定义事件映射接口
interface EventsMap {
    [event: string]: any;
}

// 基础事件通知类
export class BaseEventEmitter<Events extends EventsMap> {
    private emitter = new EventEmitter();

    on<EventName extends keyof Events>(event: EventName, listener: (payload: Events[EventName]) => void) {
        this.emitter.on(event as string, listener);
    }

    emit<EventName extends keyof Events>(event: EventName, payload: Events[EventName]) {
        this.emitter.emit(event as string, payload);
    }

    off<EventName extends keyof Events>(event: EventName, listener: (payload: Events[EventName]) => void) {
        this.emitter.off(event as string, listener);
    }
}