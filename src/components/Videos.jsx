import {Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard ,Loader} from './'


const Videos = ({videos , direction}) => {

  if(!videos?.length) return <Loader/>;
  return (
  
    <Stack direction={direction || "row"} flexWrap="wrap" 
    justifyContent= "start" gap={2} >
      {videos.map((item,index)=> (
        <Box key={index}>
           {/* If item.id is equal to videoId then we will render VideoCard in the mainscreen */}
          {item.id.videoId && <VideoCard video={item}/>}    

          {/* If item.id is equal to channelId then we will render ChannelCard in the mainscreen */}
          {item.id.channelId && <ChannelCard channelDetail={item} /> }

        </Box>
      ))}

    </Stack>

  )
}

export default Videos