import React from 'react'
import { useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import {
Box,
List,
ListItem,
ListItemText,
Typography,
useTheme

 } from '@mui/material'
// import Header from '../'
import {formatDate} from '@fullcalendar/core'
import {tokens} from '../Theme'

function Appointment() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [currentEvents,setCurrentEvents] = useState([]);
  const handleDataClick = (selected)=>{
    const title = prompt("please enter a new title");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if(title){
      calendarApi.addEvent({
        id:`${selected.dataStr}-${title}`,
        title,
        start:selected.endStr,
        allDay:selected.allDay
      })
    }
  }
  const handleEventClick = (selected)=>{
    if(window.confirm(`Are you want to delete the event ${selected.event.title}`)){
      selected.event.remove();
    };

  }
  return (
    <Box m="20px">
      {/* <Header display="flex" justifyContent="space-between"/> */}
            <Box display="flex" justifyContent="space-between" >
              {/* calendar sidebar */}
              <Box flex="1 1 20%" backgroundColor={colors.primary[400]}
              p="15px"
              borderRadius="4px"
              >
       <Typography
       variant='h5'

       >
            Events
       </Typography>
       <List>
        {
          currentEvents.map((event)=>{
            <ListItem
            key={event.id}
            sx={{backgroundColor:colors.greenAccent[500],margin:"10px 0",borderRadius:"2px"}}
            >
              <ListItemText
              primary={event.title}
              secondary={
                <Typography>
                  {
                    formatDate(event.start,{
                      year:"numeric",
                      month:"short",
                      day:"numeric"
                    })
                  }
                </Typography>
              }
              />

              
            </ListItem>
          })
        }
       </List>
              </Box>
        {/* calendar */}
        <Box
        flex="1 1 100%" ml="15px"
        >
          <FullCalendar
          height="75vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin
          ]}
          headerToolbar={{
            left:"prev, next today",
            center:"title",
            right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"

          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDataClick}
          eventClick={handleEventClick}
          eventsSet={(event)=>setCurrentEvents(event)}
          initialEvents={[
            {id:"1234",title:"All-day event",date:"2024-05-02"},
            {id:"4321",title:"Timed event",date:"2024-04-02"}
          ]}
          
          />

        </Box>
            </Box>
    </Box>
  )
}

export default Appointment