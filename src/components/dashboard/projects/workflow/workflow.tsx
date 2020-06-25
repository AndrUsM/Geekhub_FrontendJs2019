import React, { Component } from 'react';
import { ProjectsHeader } from '../../headers/headers';
import { Header, SideBar } from '../../universal_templates/frame/universal_templates';
import Preloader from '../../universal_templates/preloader';
import Fetcher from '../../../Fetcher/index';
import { TableStructure } from '../all/table';
import Menu from '../modal/modal_menu';

type ProjectState = {
    projectsAmount: number,
    table: Array<any>
}

export function ProjectList(list:TableStructure[]){
    if(list.length){
        list.map((value => {
            return ProjectField(value, value._id);
        }))
    }else{
        return <div></div>
    }
}

export function ProjectField(value:TableStructure, id:string){
    let main_color:string = "table__color_main";
    let secondary_color:string = "table__color_secondary";
    
    if(value){
        return (
            <tr className = { "table__row box_shadow-rounded box_shadow_indent"  } key = { id } id = { value._id }>
                <td className={ main_color + " table__data table__img_block" }>
                    <span className = "table__img_block table__element">
                        <img src="https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg" className="table__img_block__img" alt="user avatar"/>
                    </span>
                </td>
                <td className = { "table__data table__data-top" }>
                    <p className = { main_color }>{ value.title }</p>
                    <p className = { secondary_color }>{ value.company } {value.cost}</p>
                </td>
                <td className = { main_color + " modal_toggler table__data-middle" }>
                    <Menu id = { value._id }/>
                </td>
            </tr>
        )
    }else{
        return (
            <div></div>
        )
    }
}

export default class Workflow extends Component<{}, ProjectState> {
    constructor(props:{}) {
        document.title = "Projects.Workflow";
        super(props);
        this.get_projects_data();
        this.state = {
            projectsAmount: 0,
            table: [],
        }
    }

    async get_projects_data(){
        const response: any = await new Fetcher().get(`api/projects`, 'access')
            .then(response => { return response })

        if(response.status > 199 && response.status < 400){
            Object.keys(response.data).map((key) => response.data[key]);
            this.setState({ 
                projectsAmount: response.data.length,
                table: response.data
            })
        }
        else{
            alert("Error loading data from server")
        }
    }

    filter(criterion:string){
        if(this.state.table.length){
            switch(criterion){
                case "quened":
                    return this.state.table.filter((value:TableStructure) => {
                        return value.status.toLowerCase() === 'quened';
                    })
                case "planning":
                    return this.state.table.filter((value:TableStructure) => {
                        return value.status.toLowerCase() === 'planning';
                    })
                case "design":
                    return this.state.table.filter((value:TableStructure) => {
                        return value.status.toLowerCase() === 'design';
                    })
                case "testing":
                    return this.state.table.filter((value:TableStructure) => {
                        return value.status.toLowerCase() === 'testing';
                    })
                case "completed":
                    return this.state.table.filter((value:TableStructure) => {
                        return value.status.toLowerCase() === 'completed';
                    })
                case "developing":
                    return this.state.table.filter((value:TableStructure) => {
                        return value.status.toLowerCase() === 'completed';
                    })
                default:
                    break;
            }
        }
    }

    CompletedProjects(){
        let completed:Array<any>|undefined = this.filter("completed");
        if(completed?.length){
            return (
                <div>
                    { 
                        completed.map((value, index) => {
                            return ProjectField(value, index.toString());
                        }) 
                    }
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    }

    QuenedProjects(){
        let quened:Array<any>|undefined = this.filter("quened");
        if(quened?.length){
            return (
                <div>
                    { 
                        quened.map((value, index) => {
                            return ProjectField(value, index.toString());
                        }) 
                    }
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    }

    PlanningProject(){
        let planning:Array<any>|undefined = this.filter("planning");
        if(planning?.length){
            return (
                <div>
                    { 
                        planning.map((value, index) => {
                            return ProjectField(value, index.toString());
                        }) 
                    }
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    }

    DesignProject(){
        let design:Array<any>|undefined = this.filter("design");
        if(design?.length){
            return (
                <div>
                    { 
                        design.map((value, index) => {
                            return ProjectField(value, index.toString());
                        }) 
                    }
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    }
    DevepomentProject(){
        let development:Array<any>|undefined = this.filter("developing");
        if(development?.length){
            return (
                <div>
                    { 
                        development.map((value, index) => {
                            return ProjectField(value, index.toString());
                        }) 
                    }
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    }
    TestingProject(){
        let testing:Array<any>|undefined = this.filter("testing");
        if(testing?.length){
            return (
                <div>
                    { 
                        testing.map((value, index) => {
                            return ProjectField(value, index.toString());
                        }) 
                    }
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    }


    render(){
        if(this.state.table.length){
            return [
                <Header/>,
                <div className="main_content__wrapper">
                    <SideBar/>
                    <main className="main_content">
                        <ProjectsHeader amount = {this.state.projectsAmount}/>
                        <section className="main_content__section">
                            {/* TODO */}
                            <article className = " main_content__flex_container_column">
                                <h1 className = "text_header color_base text_center">Quened</h1>
                                { this.QuenedProjects() }
                            </article>
                            <article className = "main_content__flex_container_column">
                                <h1 className = "text_header color_base text_center">Planning</h1>
                                { this.PlanningProject() }
                            </article>
                            <article className = "main_content__flex_container_column">
                                <h1 className = "text_header color_base text_center">Design</h1>
                                { this.DesignProject() }
                            </article>
                            <article className = "main_content__flex_container_column">
                                <h1 className = "text_header color_base text_center">Development</h1>
                                { this.DevepomentProject() }
                            </article>
                            <article className = "main_content__flex_container_column">
                                <h1 className = "text_header color_base text_center">Testing</h1>
                                { this.TestingProject() }
                            </article>
                            <article className = "main_content__flex_container_column">
                                <h1 className = "text_header color_base text_center">Completed</h1>
                                { this.CompletedProjects() }
                            </article>
                        </section>
                    </main>
                </div>
            ]
        }else{
            return <Preloader/>
        }
    }
}