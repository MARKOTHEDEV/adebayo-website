import Carousel from 'react-elastic-carousel'
import Item from 'react-elastic-carousel'

  const TestingSwiper = () => {
    return (
      <Carousel enableAutoPlay autoPlaySpeed={1500} showArrows={false}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </Carousel>
    );
  }

export default  TestingSwiper 