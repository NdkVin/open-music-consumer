class Listener {
  constructor(playlistsService, mailSender) {
    this._playlistsService = playlistsService;
    this._mailSender = mailSender;

    this.listen = this.listen.bind(this);
  }

  async listen(message) {
    try {
      const { playlistId, targetEmail } = JSON.parse(message.content.toString());

      const playlistSongs = await this._playlistsService.getPlaylistsSongs(playlistId);
      const result = await this._mailSender.sendMail(targetEmail, JSON.stringify(playlistSongs));

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Listener;
