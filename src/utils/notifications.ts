import { store } from 'react-notifications-component'

type newNotificationType = {
  title?: string
  message: string
  duration?: number
}

export const createDefaultNotification = ({
  title = '',
  message,
  duration,
}: newNotificationType) => {
  store.addNotification({
    title,
    message,
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      onScreen: true,
      showIcon: true,
      duration: duration || 5000,
    },
  })
}

export const createSuccessNotification = ({
  title = '',
  message,
  duration,
}: newNotificationType) => {
  store.addNotification({
    type: 'success',
    title,
    message,
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      onScreen: true,
      showIcon: true,
      duration: duration || 5000,
    },
  })
}

export const createDangerNotification = ({
  title = '',
  message,
  duration,
}: newNotificationType) => {
  store.addNotification({
    type: 'danger',
    title,
    message,
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      onScreen: true,
      showIcon: true,
      duration: duration || 5000,
    },
  })
}

export const createInfoNotification = ({
  title = '',
  message,
  duration,
}: newNotificationType) => {
  store.addNotification({
    type: 'info',
    title,
    message,
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      onScreen: true,
      showIcon: true,
      duration: duration || 5000,
    },
  })
}

export const createWarningNotification = ({
  title = '',
  message,
  duration,
}: newNotificationType) => {
  store.addNotification({
    type: 'warning',
    title,
    message,
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      onScreen: true,
      showIcon: true,
      duration: duration || 5000,
    },
  })
}
