/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-30 00:00:22
 * @Description: 用于在元素显示时添加淡入效果 用于Framer Motion 动画库
 */
export const fadeIn = (direction: string, delay: number) => {
  return {
    // hidden: 这是一个状态，用于定义元素在隐藏状态时的属性
    hidden: {
      // 如果 "direction" 是 'up'，则元素在垂直方向上偏移 80 个单位，同时透明度为 0
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      // 如果 "direction" 是其他值，元素的位置偏移为 0，透明度为 0。
      opacity: 0,
      // 如果 "direction" 是 'down'，则元素在垂直方向上偏移 -80 个单位，同时透明度为 0。
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0
    },
    // show: 用于定义元素在显示状态时的属性 设置了元素的最终位置（位置归零）、透明度为完全可见（1），以及动画效果的配置。
    show: {
      // 位置属性 "y" 和 "x" 被设置为 0，这会将元素的位置归零。
      y: 0,
      x: 0,
      // 透明度属性 "opacity" 被设置为 1，使元素完全可见
      opacity: 1,
      // 动画过渡效果被配置为类型为 "tween"，持续时间为 1.2 秒，延迟为传入的 "delay" 参数，缓动效果由 "ease" 参数指定
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }
}
