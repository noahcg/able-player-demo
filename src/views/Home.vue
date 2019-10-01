<template>
  <section class="container">
    <div class="content">
      <h1>Fully accessible cross-browser HTML5 media player</h1>
      <section class="leftColumn">
        <h2>Features</h2>
        <ul>
          <li>Supports both audio and video.</li>
          <li>Supports either a single audio track or an entire playlist.</li>
          <li>A full set of player controls that are keyboard-accessible, properly labeled for screen reader users, and controllable by speech recognition users.</li>
          <li>Customizable keyboard shortcuts that enable the player to be operated from anywhere on the web page (unless there are multiple instances of the player on a given page; then the player must have focus for keyboard shortcuts to work).</li>
          <li>High contrast, scalable controls that remain visible in Windows High Contrast mode, plus an easy-to-see focus indicator so keyboard users can easily tell which control currently has focus.</li>
          <li>Support for closed captions and subtitles in Web Video Timed Text (WebVTT) format, the standard format recommended by the HTML5 specification.</li>
          <li>Support for chapters, also using WebVTT. Chapters are specific landing points in the video, allowing video content to have structure and be more easily navigated.</li>
          <li>Support for text-based audio description, also using WebVTT. At designated times, the description text is read aloud by browsers, or by screen readers for browsers that don’t support the Web Speech API. Users can optionally set their player to pause when audio description starts in order to avoid conflicts between the description and program audio.</li>
          <li>Support for audio description as a separate video. When two videos are available (one with description and one without), both can be delivered together using the same player and users can toggle between the versions.</li>
          <li>Support for adjustable playback rate. Users who need to slow down the video in order to better process and understand its content can do so; and users who need to speed up the video in order to maintain better focus can do so.</li>
          <li>An interactive transcript feature, built from the WebVTT chapter, caption and description files as the page is loaded. Users can click anywhere in the transcript to start playing the video (or audio) at that point. Keyboard users can also choose to keyboard-enable the transcript, so they can tab through its content one caption at a time and press enter to play the media at the desired point.</li>
          <li>Automatic text highlighting within the transcript as the media plays. This feature is enabled by default but can be turned off if users find it distracting.</li>
          <li>Support for playing YouTube and Vimeo videos within the Able Player chrome.</li>
          <li>Customizable caption display. Users can control the font style, size, and color of caption text; plus background color and transparency; all from the Preferences dialog. They can also choose to position captions below the video instead of the default position (an semi-transparent overlay).</li>
          <li>Fallback support (see section on Fallback for details).</li>
          <li>Extensive customization. Many of the features described above are controlled by user preferences. This is based on the belief that every user has different needs and there are no one-size-fits-all solutions. This is the heart of universal design.</li>
        </ul>
      </section>
      <section class="rightColumn">
        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://ableplayer.github.io/ableplayer/" target="_blank">Documentation</a>
          </li>
          <li>
            <a href="https://github.com/ableplayer/ableplayer" target="_blank">Github Repo</a>
          </li>
          <li>
            <a
              href="https://ableplayer.github.io/ableplayer/demos/"
              target="_blank"
            >Full List of Demos</a>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.container {
  padding: 30px;
}
.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
}
.leftColumn {
  grid-area: 1 / 1 / 2 / 2;
}
.rightColumn {
  grid-area: 1 / 2 / 2 / 3;
}
h1,
h2 {
  margin-top: 0;
  text-align: left;
}
ul li {
  text-align: left;
}
</style>