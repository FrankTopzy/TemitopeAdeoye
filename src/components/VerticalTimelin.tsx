import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tilt  from 'react-parallax-tilt';
import { FaTree } from 'react-icons/fa6';

function VerticalTime() {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Timeline position={`${isMobile ? 'right' : 'alternate'}`} >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
          fontSize={18}
          display={`${isMobile && 'none'}`} 
        >
          January 2022 - January 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{bgcolor: 'white'}} className='hover:scale-115 transition-all'>
            <LaptopMacIcon className='text-black'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: `${isMobile && '5px'}` }} className={`${isMobile && 'w-[80%]'}`}>
          <Tilt>
            <div className='px-7 md:px-10 bg-[#25291C] py-[10px] md:py-[20px] rounded-2xl border-2 md:border-5'>
              <div>
                <Typography variant="h5" component="span">Graphics Designer.</Typography>
                <Typography color='#e6e49f'>Canva | Graphics Design </Typography>
              </div>

              <div>
                <ul className='list-disc max-sm:text-[12px]'>
                  <li>Acquired hands-on knowledge of Graphics Design, delving into the design world.</li>
                  <li>Also gaining a solid foundation in UI/UX design.</li>
                </ul>
              </div>
            </div>
          </Tilt>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
          fontSize={18}
          display={`${isMobile && 'none'}`}
        >
          April 2023 - June 2026
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  sx={{ bgcolor: '#25291C' }}/>
          <TimelineDot sx={{bgcolor: "#25291C"}} color="primary" className='hover:scale-115 transition-all'>
            <CodeIcon/>
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: '#25291C' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: `${isMobile && '5px'}`  }} className={`${isMobile && 'w-[80%]'}`}>
          <Tilt>
            <div className='px-7 md:px-10 bg-[#e3e7d3] py-[10px] md:py-[20px] rounded-2xl border-2 md:border-5 border-[#25291C] text-left text-[#25291C]'>
              <div>
                <Typography variant="h5" component="span">Computer Scientist</Typography>
                <Typography color='gray'>FUNAAB | CSC</Typography>
              </div>

              <div>
                <ul className='list-disc max-sm:text-[12px]'>
                  <li>Started my BSC program with the aim of becoming an exceptional Computer Scientist.</li>
                  <li>Learnt the basics of Data Structures and Algorithm.</li>
                  <li>I was introduced to some languages such as Python, C, C++, Java and PHP.</li>
                </ul>
              </div>
            </div>
          </Tilt>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
         <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
          fontSize={18}
          display={`${isMobile && 'none'}`}
        >
          October 2023 - till date
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{bgcolor: "white"}} variant="outlined" className='hover:scale-115 transition-all text-[#25291C]'>
            <ImportantDevicesIcon />
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: `${isMobile && '5px'}` }} className={`${isMobile && 'w-[80%]'}`}>
          <Tilt>
            <div className='px-7 md:px-10 bg-[#e6e49f] py-[10px] md:py-[20px] rounded-2xl border-2 md:border-5 border-[var(--color-3)] text-black'>
              <div>
                <Typography variant="h5" component="span">Frontend Developer</Typography>
                <Typography>SuperSimpleDev and Co. | Software Engineering</Typography>
              </div>

              <div>
                <ul className='list-disc max-sm:text-[12px]'>
                  <li>Learnt the basics of Web development.</li>
                  <li>Learnt different frameworks and preprocessor such as Tailwind CSS and SASS respectively.</li>
                  <li>I also bacame a React + Typescript developer building different functioning and responsive websites.</li>
                </ul>
              </div>
            </div>
          </Tilt> 
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
         <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
          fontSize={18}
          display={`${isMobile && 'none'}`}
        >
          February 2025 - August 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: '#25291C' }} />
          <TimelineDot sx={{bgcolor: "#25291C"}} color="secondary" className='hover:scale-115 transition-all'>
            <FaTree />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: '#25291C' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: `${isMobile && '5px'}` }} className={`${isMobile && 'w-[90%]'}`}>
          <Tilt>
            <div className='px-7 md:px-10 bg-white py-[10px] md:py-[20px] rounded-2xl text-left border-2 md:border-5 border-[#25291C] text-black'>
              <div>
                <Typography variant="h5" component="span">Frontend Developer</Typography>
                <Typography color='grey'>FRIN | Software Development</Typography>
              </div>

              <div>
                <ul className='list-disc max-sm:text-[12px]'>
                  <li>Completed my internship, gaining a strong foundation in Frontend Development, including brief knowledge about Backend Development.</li>
                  <li>Acquired practical skills in web design and server side hosting with XAMPP, including sending info and retrieving from databases.</li>
                  <li>Developed responsive websites with HTML, CSS and Hypertext Preprocessor (PHP).</li>
                </ul>
              </div>
            </div>
          </Tilt>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default VerticalTime