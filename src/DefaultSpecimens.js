import Audio from './specimens/Audio';
import Code from './specimens/Code';
import Color from './specimens/Color';
import Html from './specimens/Html';
import Hint from './specimens/Hint';
import Image from './specimens/Image';
import Type from './specimens/Type';
import Project from './specimens/Project/Project';
import Download from './specimens/Download';
import Video from './specimens/Video';

// Mostly replaced through Image/Video/Audio specimens
// import UISpec from 'specimens/UISpec';

// The used plugin is out of date at the moment
// import FramedCodeBlock from 'specimens/FramedCodeBlock';

// As is adds mor confusion than benefit at the moment, images and icons should
// be displayed with either UISpec or Html for more complex needs
// import Icon from 'specimens/Icon';

export default {
  audio: Audio,
  code: Code,
  color: Color,
  html: Html,
  hint: Hint,
  image: Image,
  type: Type,
  'project_dont_use_this': Project,
  download: Download,
  video: Video
};
