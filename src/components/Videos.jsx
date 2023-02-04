import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';

// const url = 'https://www.programmableweb.com/api/video-songs';

const Videos = () => {
  const videoArr = [
    'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-mother-and-daughter-preparing-a-pumpkin-for-halloween-44539-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-people-pouring-a-warm-drink-around-a-campfire-513-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
  ];
  const [videoSrc, setVideoSrc] = useState(videoArr[0]);

  // useEffect(() => {
  //   axios.get(url).then(response => {
  //     console.log(response.data);
  //   });
  // }, []);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          // controlsList="nodownload"
          src={videoSrc}
          style={{ width: '100%' }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video</Heading>
          <Text>This is a sample video for testing and demo</Text>
        </VStack>
      </VStack>

      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        overflowY={'auto'}
        spacing={'8'}
        p="8"
      >
        {videoArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;

// please give me  a link of free video songs api for testing purpose
