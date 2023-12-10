import React from 'react'
import { useParams } from 'react-router-dom';
import './DetailsStyle.css'


export default function Details() {
  const params = useParams();
  console.log(params, "params");
  
    return(
        <>
            {params.id == 1 ? (
                <div className = "container" >
                   <div className="row m-3 p-4">
                       <div className="col-lg-4">
                           <div className="blog-card">
                               <div className="blog-image">
                                <img className="img-fluid" src="../images/blog-3.jpg" alt="" />
                               </div>
                               <div className="blog-details">
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel diam lorem. Quisque luctus consequat risus, et finibus libero maximus in. Mauris rhoncus odio id dolor rhoncus, at sagittis ligula iaculis. Sed faucibus dui dignissim augue gravida pretium. Aliquam erat volutpat. Aliquam mauris tortor, eleifend nec enim non, fringilla facilisis lorem. Fusce sagittis odio arcu, et aliquet ante porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis turpis, vel semper elit.</h5>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                           <div className="blog-card">
                               <div className="blog-image">
                                    <img className="img-fluid" src="../images/blog-4.jpg" alt="" />
                               </div>
                               <div className="blog-details">
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel diam lorem. Quisque luctus consequat risus, et finibus libero maximus in. Mauris rhoncus odio id dolor rhoncus, at sagittis ligula iaculis. Sed faucibus dui dignissim augue gravida pretium. Aliquam erat volutpat. Aliquam mauris tortor, eleifend nec enim non, fringilla facilisis lorem. Fusce sagittis odio arcu, et aliquet ante porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis turpis, vel semper elit.</h5>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                           <div className="blog-card">
                               <div className="blog-image">
                                    <img className="img-fluid" src="../images/blog-5.jpg" alt="" />
                               </div>
                               <div className="blog-details">
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel diam lorem. Quisque luctus consequat risus, et finibus libero maximus in. Mauris rhoncus odio id dolor rhoncus, at sagittis ligula iaculis. Sed faucibus dui dignissim augue gravida pretium. Aliquam erat volutpat. Aliquam mauris tortor, eleifend nec enim non, fringilla facilisis lorem. Fusce sagittis odio arcu, et aliquet ante porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis turpis, vel semper elit.</h5>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                           <div className="blog-card">
                               <div className="blog-image">
                                    <img className="img-fluid" src="../images/blog-3.jpg" alt="" />
                               </div>
                               <div className="blog-details">
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel diam lorem. Quisque luctus consequat risus, et finibus libero maximus in. Mauris rhoncus odio id dolor rhoncus, at sagittis ligula iaculis. Sed faucibus dui dignissim augue gravida pretium. Aliquam erat volutpat. Aliquam mauris tortor, eleifend nec enim non, fringilla facilisis lorem. Fusce sagittis odio arcu, et aliquet ante porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis turpis, vel semper elit.</h5>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                           <div className="blog-card">
                               <div className="blog-image">
                                    <img className="img-fluid" src="../images/blog-3.jpg" alt="" />
                               </div>
                               <div className="blog-details">
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel diam lorem. Quisque luctus consequat risus, et finibus libero maximus in. Mauris rhoncus odio id dolor rhoncus, at sagittis ligula iaculis. Sed faucibus dui dignissim augue gravida pretium. Aliquam erat volutpat. Aliquam mauris tortor, eleifend nec enim non, fringilla facilisis lorem. Fusce sagittis odio arcu, et aliquet ante porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis turpis, vel semper elit.</h5>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                           <div className="blog-card">
                               <div className="blog-image">
                                    <img className="img-fluid" src="../images/blog-3.jpg" alt="" />
                               </div>
                               <div className="blog-details">
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel diam lorem. Quisque luctus consequat risus, et finibus libero maximus in. Mauris rhoncus odio id dolor rhoncus, at sagittis ligula iaculis. Sed faucibus dui dignissim augue gravida pretium. Aliquam erat volutpat. Aliquam mauris tortor, eleifend nec enim non, fringilla facilisis lorem. Fusce sagittis odio arcu, et aliquet ante porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis turpis, vel semper elit.</h5>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                           <div className="blog-card">
                               <div className="blog-image">
                                    <img className="img-fluid" src="../images/blog-4.jpg" alt="" />
                               </div>
                               <div className="blog-details">
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel diam lorem. Quisque luctus consequat risus, et finibus libero maximus in. Mauris rhoncus odio id dolor rhoncus, at sagittis ligula iaculis. Sed faucibus dui dignissim augue gravida pretium. Aliquam erat volutpat. Aliquam mauris tortor, eleifend nec enim non, fringilla facilisis lorem. Fusce sagittis odio arcu, et aliquet ante porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis turpis, vel semper elit.</h5>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                           <div className="blog-card">
                               <div className="blog-image">
                                    <img className="img-fluid" src="../images/blog-5.jpg" alt="" />
                               </div>
                               <div className="blog-details">
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel diam lorem. Quisque luctus consequat risus, et finibus libero maximus in. Mauris rhoncus odio id dolor rhoncus, at sagittis ligula iaculis. Sed faucibus dui dignissim augue gravida pretium. Aliquam erat volutpat. Aliquam mauris tortor, eleifend nec enim non, fringilla facilisis lorem. Fusce sagittis odio arcu, et aliquet ante porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis turpis, vel semper elit.</h5>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                           <div className="blog-card">
                               <div className="blog-image">
                                    <img className="img-fluid" src="../images/blog-3.jpg" alt="" />
                               </div>
                               <div className="blog-details">
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel diam lorem. Quisque luctus consequat risus, et finibus libero maximus in. Mauris rhoncus odio id dolor rhoncus, at sagittis ligula iaculis. Sed faucibus dui dignissim augue gravida pretium. Aliquam erat volutpat. Aliquam mauris tortor, eleifend nec enim non, fringilla facilisis lorem. Fusce sagittis odio arcu, et aliquet ante porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis turpis, vel semper elit.</h5>
                               </div>
                           </div>
                       </div>
                   </div> 
                </div>
            ) : null}
   </>
  )
}
