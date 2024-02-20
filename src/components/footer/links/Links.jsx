"use client";
import Link from "next/link";
import MessageIcon from '@rsuite/icons/Message';
import AdminIcon from '@rsuite/icons/Admin';
import NoticeIcon from '@rsuite/icons/Notice';
import DashboardIcon from '@rsuite/icons/Dashboard';
import { usePathname } from "next/navigation";
import '../../../../styles/globals.css'
const Links = ()=>{
    const pathname= usePathname();
    const links =[
        {
            title:"Home",
            path:"/",
            icon:<DashboardIcon/>
        },{
            title:"Inbox",
            path:"/inbox",
            icon:<MessageIcon/>
        },
        {
            title:"Notifications",
            path:"/notification",
            icon:<NoticeIcon/>
        },{
            title:"Profile",
            path:"/profile",
            icon:<AdminIcon/>
        }
    ]
   return (
    <div style={{display:"flex", justifyContent:"space-between", width:"100vw"}}>
        {links.map((link=>(
             <Link href={link.path} key={link.title} 
             className={pathname === link.path ? "active-link" : ""}
              
             >{link.icon}{link.title}</Link>
            )))}
      
    </div>
   )
}
export default  Links;