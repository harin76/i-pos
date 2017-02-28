import Workarea from 'views/Workarea'

export const createWorkarea = (type) => ({
  name: `${type}-workarea`,
  render: (h) => {
    return h(Workarea, {props: {type}})
  }
})
