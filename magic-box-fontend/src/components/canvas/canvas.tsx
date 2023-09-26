import { useEffect, useRef } from 'react'

export const ParticleAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const PARTICLE_NUM = 500
    const PARTICLE_BASE_RADIUS = 0.5
    const FL = 500
    const DEFAULT_SPEED = 2
    const BOOST_SPEED = 300
    let canvas = canvasRef.current
    let canvasWidth: number, canvasHeight: number
    let context: CanvasRenderingContext2D
    let centerX: number, centerY: number
    let mouseX: number, mouseY: number
    let speed: number = DEFAULT_SPEED
    let targetSpeed: number = DEFAULT_SPEED
    const particles: Particle[] = []

    const resize = () => {
      if (canvas) {
        // 调整画布大小以适应窗口
        canvasWidth = canvas.width = window.innerWidth
        canvasHeight = canvas.height = window.innerHeight
        context = canvas.getContext('2d') as CanvasRenderingContext2D
      }
      // 计算画布中心点坐标
      centerX = canvasWidth * 0.5
      centerY = canvasHeight * 0.5
      // 设置画布填充颜色
      context.fillStyle = 'rgb(255, 255, 255)'
    }

    const randomizeParticle = (p: Particle): Particle => {
      // 随机化粒子的位置和深度
      p.x = Math.random() * canvasWidth
      p.y = Math.random() * canvasHeight
      p.z = Math.random() * 1500 + 500
      return p
    }

    const loop = () => {
      // 清空画布
      context.clearRect(0, 0, canvasWidth, canvasHeight)
      // 更新速度
      speed += (targetSpeed - speed) * 0.01

      let p: Particle
      let cx: number, cy: number
      let rx: number, ry: number
      let f: number, x: number, y: number, r: number
      let pf: number, px: number, py: number, pr: number
      let a: number, a1: number, a2: number
      const halfPi: number = Math.PI * 0.5
      const atan2: Math['atan2'] = Math.atan2
      const cos: Math['cos'] = Math.cos
      const sin: Math['sin'] = Math.sin

      context.beginPath()

      for (let i = 0; i < PARTICLE_NUM; i++) {
        p = particles[i]
        p.pastZ = p.z
        p.z -= speed

        if (p.z <= 0) {
          // 重置粒子的位置和深度
          randomizeParticle(p)
          continue
        }

        cx = centerX - (mouseX - centerX) * 1.25
        cy = centerY - (mouseY - centerY) * 1.25
        rx = p.x - cx
        ry = p.y - cy
        f = FL / p.z
        x = cx + rx * f
        y = cy + ry * f
        r = PARTICLE_BASE_RADIUS * f

        pf = FL / p.pastZ
        px = cx + rx * pf
        py = cy + ry * pf
        pr = PARTICLE_BASE_RADIUS * pf

        a = atan2(py - y, px - x)
        a1 = a + halfPi
        a2 = a - halfPi

        context.moveTo(px + pr * cos(a1), py + pr * sin(a1))
        context.arc(px, py, pr, a1, a2, true)
        context.lineTo(x + r * cos(a2), y + r * sin(a2))
        context.arc(x, y, r, a2, a1, true)
        context.closePath()
      }

      context.fill()

      requestAnimationFrame(loop)
    }

    const handleMouseMove = (e: MouseEvent) => {
      // 更新鼠标位置
      mouseX = e.clientX
      mouseY = e.clientY
    }
    const handleMouseDown = (e: MouseEvent) => {
      // 在画布区域鼠标按下时提速
      if (canvas && e.target === canvas) {
        targetSpeed = BOOST_SPEED
      }
    }

    const handleMouseUp = (e: MouseEvent) => {
      // 在画布区域鼠标松开时恢复默认速度
      if (canvas && e.target === canvas) {
        targetSpeed = DEFAULT_SPEED
      }
    }
    // const handleMouseDown = () => {
    //   // 鼠标按下时提速
    //   targetSpeed = BOOST_SPEED
    // }

    // const handleMouseUp = () => {
    //   // 鼠标松开时恢复默认速度
    //   targetSpeed = DEFAULT_SPEED
    // }

    // 监听窗口大小变化，重新调整画布大小
    window.addEventListener('resize', resize)
    // 监听鼠标移动、按下和松开事件
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    if (canvasRef.current) {
      canvas = canvasRef.current
      // 其他操作
    }

    resize()

    // 初始化粒子位置和深度
    for (let i = 0; i < PARTICLE_NUM; i++) {
      particles[i] = randomizeParticle(new Particle())
      particles[i].z -= 500 * Math.random()
    }

    // 启动动画循环
    loop()

    // 组件卸载时清除事件监听器
    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return <canvas className={'canvas'} ref={canvasRef} />
}

class Particle {
  x: number
  y: number
  z: number
  pastZ: number

  constructor(x = 0, y = 0, z = 0) {
    this.x = x
    this.y = y
    this.z = z
    this.pastZ = 0
  }
}
