import { useParams, useNavigate } from 'react-router-dom';


import ProjectBanner from "../../Components/Banner/ProjectBanner";
import Projects from "../../Data/ProjectData";
import Card from "../../Components/Card/Card";
import ProjectDetail from "../../Components/ProjectDetail/ProjectDetail";


export default function Project(){
    const navigate = useNavigate();

    const handleCardClick = (name) => {
        navigate(`${process.env.PUBLIC_URL}/project-details/${name}`);
    };

    const { name } = useParams();
    const currProject = Projects.find(project => project.name === name);

    const projectItems = Projects.filter((project) => project.name !== name).map(item => {
        return <Card
                    key={item.id} 
                    type={item.type} 
                    title={item.title} 
                    description={item.description} 
                    path={item.img}
                    column={'lg:col-span-4'}
                    skills={item.skills}
                    onClick={( )=> handleCardClick(item.name)} 
                />
    })

    return(
        <main>
            <section className="section relative">
                <ProjectBanner 
                    project={currProject}
                />
            </section>
            <section className="section">
                <div className="-bg--body--backgroundColor">
                    <ProjectDetail project={currProject} />
                </div>
            </section>
            <section className="section">
                <div className="my-grid max-w-[1200px] mx-auto py-20 md:py-40 px-6">
                    <div className="col-span-12">
                        <h3>MORE PROJECTS<span className="point-dot"></span></h3>
                        <div className="my-grid gap-y-10 my-10 lg:gap-10">
                            {projectItems}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}