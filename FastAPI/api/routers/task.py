from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

import api.cruds.task as task_crud
import api.schemas.task as task_schema
from api.db import get_db

router = APIRouter()


@router.get("/tasks", response_model=List[task_schema.Task])
async def list_tasks(db: AsyncSession = Depends(get_db)):
    return await task_crud.get_tasks_with_done(db)

@router.post("/tasks", response_model=task_schema.TaskCreateResponse)
async def create_task(
    task_body: task_schema.TaskCreate, db: AsyncSession = Depends(get_db)
):
    return await task_crud.create_task(db, task_body)

@router.post("/add_info" )  #名前、職業、趣味、趣味にかけるお金を追加(自由に変更可)
async def add_info(

):
    pass

@router.put("/tasks/{task_id}",  response_model=task_schema.TaskCreateResponse)
async def update_task(
    task_id: int, task_body: task_schema.TaskCreate, db: AsyncSession = Depends(get_db)
):
    task = await task_crud.get_task(db, task_id=task_id)
    if task is None:
        raise HTTPException(stasus_code=404, detail="Task not found")
    
    return await task_crud.update_task(db, task_body, original=task)

@router.put("/update_time_limit")   #タスク期限変更(自由に変更可)
async def update_time_limit(

):
    pass

@router.put("/update_task_content") #タスク内容変更(自由に変更可)
async def update_task_content(

):
    pass

@router.delete("/tasks/{task_id}", response_model=None)
async def delete_task(task_id: int, db: AsyncSession = Depends(get_db)):
    task = await task_crud.get_task(db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    
    return await task_crud.delete_task(db, original=task)