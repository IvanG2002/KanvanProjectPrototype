import React from 'react'
import "./taskCard.css"

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ id, username, task, info }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners} className='card'>
            {/* header */}
            <div className='card__header'>
                <div className='header__left'>
                    <div className='left__profile'></div>
                    <h1 className='left__username'>{username}</h1>
                </div>
                <div className='header__right'>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            {/* main */}
            {/* maximo 10 a 15 caracteres */}
            <div className='card__main'>
                <p className='main__task'>{task}</p>
            </div>
            {/* bottom */}
            <div className='card__bottom'>
                <div className='bottom__left'>
                    <div className='left__team'></div>
                    <div className='left__team'></div>
                    <div className='left__team'></div>
                </div>
                <div className='bottom__right'>
                    <h3 className='right__info'>{info}</h3>
                    <div className='righ__marks'>
                        <i class="fa-solid fa-bookmark mark__status--success"></i>
                        <i class="fa-solid fa-circle mark__status--danger"></i>
                        <i class="fa-solid fa-check mark__status--task"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard