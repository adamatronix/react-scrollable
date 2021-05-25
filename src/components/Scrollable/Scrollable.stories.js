import React, { useEffect, useState } from 'react';
import Scrollable from './Scrollable';

export default {
  title: 'Scrollable',
  component: Scrollable,
};

export const Default = () => (
<div style={{width: '300px', height: '40vh'}}>
     <Scrollable>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus id ex eu cursus. Fusce nec luctus urna. Mauris ac leo commodo magna laoreet bibendum. Pellentesque ut justo nec urna tincidunt mattis ac vitae nulla. Vivamus in pellentesque leo, sit amet ultricies sem. Nulla varius, lectus vitae eleifend volutpat, metus libero maximus neque, et lacinia mi nibh non ex. Donec imperdiet, diam sit amet rutrum placerat, nunc sapien congue nibh, in euismod nisi sem in nisi. Aenean elementum risus lacus, quis mollis neque rutrum et. Fusce fringilla metus et purus egestas, at lobortis est pretium. Praesent sollicitudin nulla eu odio posuere facilisis. Vivamus ornare commodo nisl, sed tempus ipsum lobortis maximus. Quisque a justo tincidunt, rhoncus felis sit amet, vehicula eros. Vivamus pulvinar elit et lobortis tristique.
      Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum.
      Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum.
    </Scrollable>
</div> 
);

export const AutoHide = () => (
  <div style={{width: '300px', height: '40vh'}}>
       <Scrollable autoHide>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus id ex eu cursus. Fusce nec luctus urna. Mauris ac leo commodo magna laoreet bibendum. Pellentesque ut justo nec urna tincidunt mattis ac vitae nulla. Vivamus in pellentesque leo, sit amet ultricies sem. Nulla varius, lectus vitae eleifend volutpat, metus libero maximus neque, et lacinia mi nibh non ex. Donec imperdiet, diam sit amet rutrum placerat, nunc sapien congue nibh, in euismod nisi sem in nisi. Aenean elementum risus lacus, quis mollis neque rutrum et. Fusce fringilla metus et purus egestas, at lobortis est pretium. Praesent sollicitudin nulla eu odio posuere facilisis. Vivamus ornare commodo nisl, sed tempus ipsum lobortis maximus. Quisque a justo tincidunt, rhoncus felis sit amet, vehicula eros. Vivamus pulvinar elit et lobortis tristique.
        Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum.
        Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum.
      </Scrollable>
  </div> 
  );

  export const AutoHideWithTimer = () => (
    <div style={{width: '300px', height: '40vh'}}>
         <Scrollable hideTime={2000} autoHide>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus id ex eu cursus. Fusce nec luctus urna. Mauris ac leo commodo magna laoreet bibendum. Pellentesque ut justo nec urna tincidunt mattis ac vitae nulla. Vivamus in pellentesque leo, sit amet ultricies sem. Nulla varius, lectus vitae eleifend volutpat, metus libero maximus neque, et lacinia mi nibh non ex. Donec imperdiet, diam sit amet rutrum placerat, nunc sapien congue nibh, in euismod nisi sem in nisi. Aenean elementum risus lacus, quis mollis neque rutrum et. Fusce fringilla metus et purus egestas, at lobortis est pretium. Praesent sollicitudin nulla eu odio posuere facilisis. Vivamus ornare commodo nisl, sed tempus ipsum lobortis maximus. Quisque a justo tincidunt, rhoncus felis sit amet, vehicula eros. Vivamus pulvinar elit et lobortis tristique.
          Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum.
          Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum.
        </Scrollable>
    </div> 
    );

export const Restyled = () => (
  <div style={{width: '300px', height: '40vh'}}>
        <Scrollable 
          wrapperStyles={{paddingRight: ' 5px'}}
          trackStyles={{width: '1px', backgroundColor: '#000'}} 
          handleStyles={{width: '3px', left: '-1px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus id ex eu cursus. Fusce nec luctus urna. Mauris ac leo commodo magna laoreet bibendum. Pellentesque ut justo nec urna tincidunt mattis ac vitae nulla. Vivamus in pellentesque leo, sit amet ultricies sem. Nulla varius, lectus vitae eleifend volutpat, metus libero maximus neque, et lacinia mi nibh non ex. Donec imperdiet, diam sit amet rutrum placerat, nunc sapien congue nibh, in euismod nisi sem in nisi. Aenean elementum risus lacus, quis mollis neque rutrum et. Fusce fringilla metus et purus egestas, at lobortis est pretium. Praesent sollicitudin nulla eu odio posuere facilisis. Vivamus ornare commodo nisl, sed tempus ipsum lobortis maximus. Quisque a justo tincidunt, rhoncus felis sit amet, vehicula eros. Vivamus pulvinar elit et lobortis tristique.
        Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum.
        Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum.
      </Scrollable>
  </div> 
  );

export const ScrollTo = () => {
  const [ Pos, setPos] = useState(0);
  return (
    <div>
      <div style={{padding: '20px 0'}}>
        <button onClick={() => { setPos(100) }}>position 1</button>
        <button onClick={() => { setPos(150) }}>position 2</button>
        <button onClick={() => { setPos(200) }}>position 3</button>
      </div>
      <div style={{width: '300px', height: '40vh'}}>
        <Scrollable scrollTo={Pos}>
          <TestComp />
        </Scrollable>
      </div> 
    </div>
    
    );
} 

const TestComp = () => {
  useEffect(() => {
  }, []);

  return (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus id ex eu cursus. Fusce nec luctus urna. Mauris ac leo commodo magna laoreet bibendum. Pellentesque ut justo nec urna tincidunt mattis ac vitae nulla. Vivamus in pellentesque leo, sit amet ultricies sem. Nulla varius, lectus vitae eleifend volutpat, metus libero maximus neque, et lacinia mi nibh non ex. Donec imperdiet, diam sit amet rutrum placerat, nunc sapien congue nibh, in euismod nisi sem in nisi. Aenean elementum risus lacus, quis mollis neque rutrum et. Fusce fringilla metus et purus egestas, at lobortis est pretium. Praesent sollicitudin nulla eu odio posuere facilisis. Vivamus ornare commodo nisl, sed tempus ipsum lobortis maximus. Quisque a justo tincidunt, rhoncus felis sit amet, vehicula eros. Vivamus pulvinar elit et lobortis tristique.
        Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum.
        Mauris ac mauris massa. Etiam blandit tempor urna, et lacinia orci tincidunt in. Suspendisse nec pretium ligula. Nullam pulvinar venenatis sem id aliquam. Ut luctus diam a dui egestas varius. In sagittis felis nulla, at efficitur sapien fringilla sit amet. Vivamus interdum turpis eu mauris porttitor, sit amet scelerisque tortor elementum.
    </>
  )
}