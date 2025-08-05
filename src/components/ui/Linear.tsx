import * as React from 'react'
import LinearProgress, {
  LinearProgressProps
} from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={props.value}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: '#f8bbd0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#e91e63'
            }
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  )
}

export default function App() {
  const [progress, setProgress] = React.useState(10)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      )
    }, 800)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 8 }}>
      <Typography variant="h6" gutterBottom>
        Loading Progress
      </Typography>
      <LinearProgressWithLabel value={progress} />
    </Box>
  )
}
