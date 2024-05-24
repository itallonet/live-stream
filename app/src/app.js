import './assets/style.css';
import Chat from './components/chat';
import VideoPlayer from './components/video';
import ViewerCount from './components/viewer';

function App() {
  return (
    <div id='container'>
      <div id='player-box'>
        <VideoPlayer streamUrl="http://localhost/hls/123.m3u8" />
        <ViewerCount />
      </div>

      <div id='chat'>
        <Chat />
      </div>
    </div>
  );
}

export default App;
