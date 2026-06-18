import { FaCircleExclamation } from 'react-icons/fa6';
import { FaCircleCheck } from 'react-icons/fa6';


export default function ProjectDetailCard({project, width}){
    // const slideList = project.content;
    const detailCards = project.map((item) => {
            return (
                    <div className={`col-span-12 ${width === "full" ? "md:col-span-12" : "md:col-span-6"} -bg--card-background p-6 rounded-2xl border border-solid -border--outline md:p-10 shadow-md`} key={item.id}>
                        <p className="blue-lable mb-10">{item.cardTitle}</p>
                        {Array.isArray(item.content) ? (
                            item.content.map((listItem, index) => (
                                <div className="mb-8" key={index}>
                                    {listItem.list && <div className="text-lg -text--primary font-medium">{listItem.list}</div>}
                                    {listItem.listDisc && <div className="body--gray">{listItem.listDisc}</div>}
                                    {listItem.challenges && 
                                    <div className="my-grid">
                                            <div className="col-span-12 md:col-span-6">
                                                <div className="text-sm -text--primary font-medium mt-3 mb-2 flex flex-row items-center gap-1">
                                                    <FaCircleExclamation className="inline-block" /> Challenge
                                                </div>
                                                <div className="body--gray">{listItem.challenges}</div>
                                            </div>
                                        
                                            <div className="col-span-12 md:col-span-6 ">
                                                <div className="text-sm -text--primary font-medium mt-3 mb-2 flex flex-row items-center gap-1">
                                                    <FaCircleCheck className="inline-block -text--blue" /> Solution
                                                </div>
                                                <div className="body--gray">{listItem.solutions}</div>
                                            </div>
                                        
                                    </div>}
                                    
                                </div>
                            ))
                            ) : (
                            <p className="body--gray">No content available.</p>
                        )}
                    </div>
                    )
                }    
            )
    
    return(
        <>
            {detailCards}
        </>
            
    )
}