import { motion, useScroll, useSpring } from "framer-motion";
import ProjectDetailCard from "../ProjectDetailCard/ProjectDetailCard";
import Carousel from "../Flickity/Flickity";

export default function ProjectDetail({ project }){
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return(
        <div id="first-section">
            <div className="my-grid max-w-[1200px] mx-auto p-10 px-6 lg:py-40">
                <motion.div className="fixed top-0 left-0 w-full h-2 -bg--blue origin-left z-50" style={{ scaleX }} />
                <div className="col-span-12 md:col-span-6 mb-20">
                    <h3>OVERVIEW<span className="point-dot"></span></h3>
                    <div className="body--gray">{project.overview}</div>
                </div>
                <div className="col-span-12 mb-5">
                    <div className="my-grid gap-y-5 max-w-[1200px] mx-auto">
                        <ProjectDetailCard 
                            project={project.keyPoint}
                        />
                        {project.challenges &&
                            <ProjectDetailCard 
                                width="full"
                                project={project.challenges}
                            />
                        }
                    </div>
                </div>
                {
                    project.slideImg && 
                        <div className="col-span-12 mb-5">
                            <Carousel
                                gallery={project}
                            />
                        </div>
                }
                {
                    project.videoLink &&
                        <div className="col-span-12 mb-5">
                            <div className='-bg--card-background pt-6 pb-10 rounded-2xl border border-solid -border--outline px-6 md:p-10 shadow-md'>
                                <div className='w-full box-border'>
                                    <p className='blue-lable mb-10'>Demo Video</p>
                                    <div className='flex justify-center items-center rounded-xl box-border bg-black'>
                                        <iframe
                                            src={project.videoLink}
                                            title="Project Video"
                                            width="100%"
                                            height="500"
                                            frameBorder="0"
                                            allow="autoplay; fullscreen"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}