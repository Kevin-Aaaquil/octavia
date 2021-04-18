import { skipSong } from '../controller';
import { ERROR_MESSAGES } from '../shared/constants';

export const skipCommand = async message => {
  if (!message.member.voice.channel) return message.reply(ERROR_MESSAGES.USER_NOT_IN_A_VOICE_CHANNEL);
  if (!message.guild.me.voice.channel) return message.reply(ERROR_MESSAGES.BOT_NOT_IN_A_VOICE_CHANNEL);
  if (!message.member.voice.channel) return message.reply(ERROR_MESSAGES.USER_NOT_IN_A_VOICE_CHANNEL);
  if (message.guild.me.voice.channel) {
    if (!(message.member.voice.channelID === message.guild.me.voice.channelID))
      return message.reply(ERROR_MESSAGES.USER_NOT_IN_THE_SAME_CHANNEL);
  }
  await skipSong(message);
};
