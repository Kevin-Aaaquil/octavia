import { connectionMap } from '../controller';
import { userInVoiceChannelCheck } from '../shared/auth';
import { MESSAGES } from '../shared/constants';

export const pauseCommand = message => {
  if (userInVoiceChannelCheck(message)) {
    connectionMap.get(message.guild.id).dispatcher.pause(true);
    message.reply(MESSAGES.MUSIC_PAUSE);
  }
};
