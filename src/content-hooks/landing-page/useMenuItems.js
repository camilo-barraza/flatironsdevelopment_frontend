import { useStaticQuery, graphql } from "gatsby"

export const useMenuItems = (pageName) => {
  let { fl: { menus: { edges:menus } }  } = useStaticQuery(
    graphql`
    query MenuItems {
      fl {
        menus {
          edges {
            node {
              name
              menuItems {
                edges {
                  node {
                    url
                    label
                  }
                }
              }
            }
          }
        }
      }
    }
    `
  )
  let { node:{ menuItems:{ edges:menuItems }} } = menus.find(menu => menu.node.name === pageName)
  return menuItems
}

