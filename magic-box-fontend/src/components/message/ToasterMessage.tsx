import type { MessageProps, Toaster } from 'rsuite'
import { Message } from 'rsuite'

type PlacementType = 'topCenter' | 'bottomCenter' | 'topStart' | 'topEnd' | 'bottomStart' | 'bottomEnd'

interface ToastContainerProps {
  /** 消息框的位置 */
  placement?: PlacementType
  /** 设置消息出现在指定的容器中 */
  container?: HTMLElement | (() => HTMLElement)
  /** 自动关闭消息前等待的毫秒数 */
  duration?: number
}

interface Props extends ToastContainerProps, MessageProps {
  msg: string
  toaster: Toaster
  toasterProps?: Partial<ToastContainerProps>
}

/**
 * 推送消息
 * @param type
 * @param msg
 * @param toaster
 * @param toasterProps
 * @param restProps
 */
export const pushMessage = ({ type, msg, toaster, toasterProps, ...restProps }: Props) => {
  const message = (
    <Message showIcon type={type} closable {...restProps}>
      {msg}
    </Message>
  )
  toaster.push(message, { ...toasterProps })
}
