# summary

/** ================================== <Link/> =======================================================================*/
    // 跳转路由

    // <Link to={url || match.url}>
    //     context
    // </Link>

    // <Link
    //     to={{
    //         pathname: '/home',
    //         search: '?sort=name',
    //         hash: "#the-hash",
    //     }}
    //     replace //如果为true，则单击该链接将替换历史堆栈中的当前条目，而不是添加新条目。
    // >
    //     context
    // </Link>

/** ============================================= <NavLink> ==========================================================*/
    // 活动跳转路由，带样式
    // <NavLink
    //     to="/faq"
    //     activeStyle={{
    //         fontWeight: "bold",
    //         color: "red"
    //     }}
    //     activeClassName="class"
    //     strict //如果为true，则在确定位置是否与当前URL匹配时，将考虑位置路径名上的尾部斜杠。
    //     isActive={(match, location) => {
    //         if (!match) {
    //             return false
    //         }
    //         const eventID = parseInt(match.params.eventID)
    //         return !isNaN(eventID) && eventID % 2 === 1
    //     }} // 用于添加额外逻辑以确定链接是否处于活动状态的功能。 如果您要做的不仅仅是验证链接的路径名是否与当前URL的路径名匹配，那么应该使用此方法。
    // >
    //     context
    // </NavLink>


/** ============================================== 路由 ==============================================================*/
/** =============================================== 重定向 ===========================================================*/
    // <Redirect from={pathForm} to={pathTo}/>
    // <Redirect
    //     to={{
    //         pathname: "/login",
    //         search: "?utm=your+face",
    //         state: { referrer: currentLocation }
    //     }}
    //     push //如果为true，重定向将把新条目推送到历史记录而不是替换当前的条目。
    // />

    // <Route
    //     exact  // 去除模糊匹配
    //     path={path || match.path}
    //     render={() => (
    //         <Redirect
    //             to={path || match.path}
    //         />
    //     )}
    // />

/** =========================================== 匹配一级 =============================================================*/
    // <Route
    //     path="/:id"
    //     component={Component}
    // />

/** =================================== 可以使用正则表达式来控制应匹配哪些参数值 =====================================*/
    // <Route
    //     path="/:direction(asc|desc)"
    //     component={ComponentWithRegex}
    // />

/** ====================================== 未匹配到的路由都会渲染这个组件 ============================================*/
    // <Route component={NoMatchComponent} />

/** ======================================= Switch只匹配第一个 =======================================================*/
    // <Switch>
    //     <Route
    //         path={path || match.path}
    //         component={Component}
    //     />
    // </Switch>

/** =========================================== 自定义组件 ===========================================================*/
    {/* 自定义组件 */}
    // <Route
    //     path={path || match.path}
    //     render={() => <h1>example</h1>}
    // />

    // <Route
    //     path={path || match.path}
    //     render={props => <Component {...props} extra={someVariable}/>}
    // />

/** =========================================== 高阶组件 =============================================================*/
    // 您可以通过withRouter高阶组件访问历史对象的属性和最接近的<Route>的匹配。 withRouter会在呈现时将更新的匹配，位置和历史道具传递给包装组件
    // widthRouter()(Component)

/** ============================================= match =============================================================*/
    // this.props.match

/** ============================================= withRouter =========================================================*/
// 高阶组件中的withRouter,
// 作用是将一个组件包裹进Route里面,
// 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中.

// import {withRouter} from 'react-router-dom';
// export default withRouter(Component)

/** ============================================= history ============================================================*/
    // import { createHashHistory } from 'history';
    // 导出history
    // export const history = createHashHistory({
    //     basename: '', // 应用程序的基本URL
    //     hashType: 'slash', // 要使用的哈希类型(三种哈希方式)
    //     getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 用于确认用户导航的功能
    // });

/** =============================================== history的属性 ====================================================*/
    // history.length - 历史堆栈中的条目数
    // history.location - 当前位置
    // history.action - 当前的导航动作

/** ============================================== location的属性 ====================================================*/
    // location.pathname  -  URL的路径
    // location.search  -  URL查询字符串
    // location.hash  -  URL哈希片段

/** ================================================ history的方法 ===================================================*/
    // history.push(path, [state])
    // history.replace(path, [state])
    // history.go(n)
    // history.goBack()
    // history.goForward()
