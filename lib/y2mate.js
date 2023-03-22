const axios = require('axios'),
  cheerio = require('cheerio'),
  shortUrl = async (_0x11ae7d) => {
    return (
      await axios.get(
        'https://tinyurl.com/api-create.php?url=' +
          encodeURIComponent(_0x11ae7d)
      )
    ).data
  }
class Youtube {
  constructor() {
    this.headers = {
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 OPR/81.0.4196.61',
      'sec-ch-ua':
        '"Opera GX";v="81", " Not;A Brand";v="99", "Chromium";v="95"',
    }
  }
  ['search'](_0x424d81) {
    return new Promise(async (_0x440eb5, _0x2239da) => {
      try {
        const _0x1192c1 = await axios.get(
            'https://www.youtube.com/results?search_query=' +
              encodeURIComponent(_0x424d81.trim()),
            { headers: { ...this.headers } }
          ),
          _0x17d415 = cheerio.load(_0x1192c1.data)
        let _0x5d7277
        for (
          let _0x304456 = 0;
          _0x17d415('script').length > _0x304456;
          _0x304456++
        ) {
          const _0x178dd8 = _0x17d415('script')[_0x304456],
            _0x10c3f4 = _0x17d415(_0x178dd8)
              .get()[0]
              .children[0]?.data.includes('var ytInitialData = ')
          if (_0x10c3f4) {
            const _0x572a5c = _0x17d415('script')[_0x304456],
              _0x45d0df = _0x17d415(_0x572a5c)
                .get()[0]
                .children[0].data.split('var ytInitialData = ')[1]
                .replace(/;/g, '')
            _0x5d7277 = JSON.parse(_0x45d0df)
          }
        }
        if (typeof _0x5d7277 === 'object') {
          const _0x11cb72 =
              _0x5d7277.contents.twoColumnSearchResultsRenderer.primaryContents
                .sectionListRenderer.contents,
            _0x4e074a =
              _0x11cb72.length === 2
                ? _0x11cb72[0].itemSectionRenderer.contents
                : _0x11cb72[1].itemSectionRenderer.contents
          if (_0x4e074a instanceof Error) {
            return _0x2239da('error search data')
          }
          const _0x1ecd92 = new Array()
          for (const _0x531591 of _0x4e074a) {
            const _0x5ce6b0 = _0x531591.videoRenderer
            if (_0x5ce6b0) {
              const _0x174d28 = {
                videoId: _0x5ce6b0.videoId,
                url:
                  'https://www.youtube.com' +
                  _0x5ce6b0.navigationEndpoint.commandMetadata
                    .webCommandMetadata.url,
                title: _0x5ce6b0.title.runs[0].text,
                description: _0x5ce6b0.detailedMetadataSnippets
                  ? _0x5ce6b0.detailedMetadataSnippets[0].snippetText.runs[0]
                      .text
                  : 'Unknown',
                thumbnail:
                  _0x5ce6b0.thumbnail.thumbnails[1]?.url.split('?')[0] ??
                  _0x5ce6b0.thumbnail.thumbnails[0]?.url.split('?')[0] ??
                  'https://api-xcoders.xyz/images/avatar.png',
                duration:
                  _0x5ce6b0.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer?.text.simpleText.replace(
                    '.',
                    ':'
                  ) || 'Unknown',
                published_at:
                  _0x5ce6b0.publishedTimeText?.simpleText || 'Unknown',
                views: isNaN(
                  parseInt(
                    _0x5ce6b0.viewCountText.simpleText
                      ?.split(' x ')[0]
                      .replace(/\./g, '')
                  )
                )
                  ? 'Unknown'
                  : parseInt(
                      _0x5ce6b0.viewCountText.simpleText
                        ?.split(' x ')[0]
                        .replace(/\./g, '')
                    ),
                isLive: Object.keys(_0x5ce6b0).includes('badges')
                  ? !!/live/i.test(
                      _0x5ce6b0.badges[0].metadataBadgeRenderer.label
                    )
                  : false,
                author: {
                  name: _0x5ce6b0.ownerText.runs[0].text,
                  url:
                    'https://www.youtube.com' +
                    _0x5ce6b0.ownerText.runs[0].navigationEndpoint
                      .commandMetadata.webCommandMetadata.url,
                },
              }
              ;(Object.keys(_0x5ce6b0).includes('badges')
                ? !!/live/i.test(
                    _0x5ce6b0.badges[0].metadataBadgeRenderer.label
                  )
                : false) &&
                (delete _0x174d28.duration,
                delete _0x174d28.uploaded,
                delete _0x174d28.views)
              _0x1ecd92.push(_0x174d28)
            }
          }
          _0x440eb5(_0x1ecd92)
        } else {
          _0x2239da('error request')
        }
      } catch (_0x217ea8) {
        _0x2239da(_0x217ea8)
      }
    })
  }
  ['download'](_0x22e131, _0x1d8796, _0x38a3cd = false) {
    return new Promise(async (_0x58f4d0, _0x19eaf5) => {
      await axios
        .request({
          method: 'POST',
          url: 'https://api.onlinevideoconverter.pro/api/convert',
          data: { url: arguments[0] },
        })
        .then(
          async ({
            status: _0x306361,
            statusText: _0x289b8a,
            data: _0x44041b,
          }) => {
            if (_0x306361 !== 200) {
              return _0x19eaf5(_0x289b8a)
            }
            const _0x3701dd = _0x44041b.meta.title,
              _0x1eccfd = _0x44041b.meta.duration,
              _0x50f9a9 = _0x44041b.thumb,
              _0x880927 = _0x44041b.meta.tags
            if (arguments[1] == false) {
              const _0x3554b4 = _0x1d8796,
                _0x40727a =
                  _0x3554b4[0] ?? _0x3554b4[1] ?? _0x3554b4[2] ?? _0x3554b4[3],
                _0x46abfb = _0x40727a.quality,
                _0x2484a5 = _0x40727a.filesize,
                _0x614e20 = _0x40727a.filesize,
                _0x2d50b1 = _0x40727a.url ?? _0x40727a.info_url,
                _0x305802 = await shortUrl(_0x2d50b1)
              _0x58f4d0({
                title: _0x3701dd,
                duration: _0x1eccfd,
                quality: _0x46abfb,
                bytesize: _0x2484a5,
                size: _0x614e20,
                thumbnail: _0x50f9a9,
                tags: _0x880927,
                url: _0x305802,
              })
            } else {
              const _0x8a7940 = _0x44041b.url.filter(
                  (_0x4998ba) => _0x4998ba.audio === true
                ),
                _0x4cda68 =
                  _0x8a7940[0] ?? _0x8a7940[1] ?? _0x8a7940[2] ?? _0x8a7940[3],
                _0x3c6a06 = _0x4cda68.quality,
                _0x3f23ab = _0x4cda68.filesize,
                _0x46b7b4 = _0x4cda68.filesize,
                _0xd904e4 = _0x4cda68.url ?? _0x4cda68.info_url,
                _0x5b6e38 = await shortUrl(_0xd904e4)
              _0x58f4d0({
                title: _0x3701dd,
                duration: _0x1eccfd,
                quality: _0x3c6a06,
                bytesize: _0x3f23ab,
                size: _0x46b7b4,
                thumbnail: _0x50f9a9,
                tags: _0x880927,
                url: _0x5b6e38,
              })
            }
          }
        )
        .catch(_0x19eaf5)
    })
  }
  ['play'](_0x2653a1, _0x3b5786 = false) {
    return new Promise(async (_0x510358, _0x1d3c34) => {
      const _0x46f2b2 = await this.search(arguments[0])
      if ((_0x46f2b2 && _0x46f2b2[0] && _0x46f2b2[0].url) === undefined) {
        return _0x1d3c34('error searching data')
      }
      await axios
        .request({
          method: 'POST',
          url: 'https://api.onlinevideoconverter.pro/api/convert',
          data: { url: _0x46f2b2[0].url },
        })
        .then(
          async ({
            status: _0x17ad57,
            statusText: _0x2c2dc1,
            data: _0x5e00eb,
          }) => {
            if (_0x17ad57 !== 200) {
              return _0x1d3c34(_0x2c2dc1)
            }
            const _0xd340ac = _0x5e00eb.meta.title,
              _0x173015 = _0x5e00eb.meta.duration,
              _0x25eaed = _0x5e00eb.thumb,
              _0x4a96db = _0x5e00eb.meta.tags
            if (arguments[1] == false) {
              const _0x2243ab = _0x5e00eb.url.filter(
                  (_0x4a8f28) => _0x4a8f28.quality.toString() === '360' ?? '720'
                ),
                _0x405c50 =
                  _0x2243ab[0] ?? _0x2243ab[1] ?? _0x2243ab[2] ?? _0x2243ab[3],
                _0x2bbbf7 = _0x405c50.quality,
                _0x4109f9 = _0x405c50.filesize,
                _0x3708f7 = _0x405c50.filesize,
                _0x58a231 = _0x405c50.url ?? _0x405c50.info_url,
                _0x3d317c = await shortUrl(_0x58a231)
              _0x510358({
                title: _0xd340ac,
                duration: _0x173015,
                quality: _0x2bbbf7,
                bytesize: _0x4109f9,
                size: _0x3708f7,
                thumbnail: _0x25eaed,
                tags: _0x4a96db,
                url: _0x3d317c,
              })
            } else {
              const _0x3726ff = _0x5e00eb.url.filter(
                  (_0x40b015) => _0x40b015.audio === true
                ),
                _0x91993e =
                  _0x3726ff[0] ?? _0x3726ff[1] ?? _0x3726ff[2] ?? _0x3726ff[3],
                _0x294a77 = _0x91993e.quality,
                _0x573eed = _0x91993e.filesize,
                _0x4fbe2e = _0x91993e.filesize,
                _0x288185 = _0x91993e.url ?? _0x91993e.info_url,
                _0x63aaf9 = await shortUrl(_0x288185)
              _0x510358({
                title: _0xd340ac,
                duration: _0x173015,
                quality: _0x294a77,
                bytesize: _0x573eed,
                size: _0x4fbe2e,
                thumbnail: _0x25eaed,
                tags: _0x4a96db,
                url: _0x63aaf9,
              })
            }
          }
        )
        .catch(_0x1d3c34)
    })
  }
  ['short'](_0x46b821) {
    return new Promise(async (_0x45678d, _0x2e7d8f) => {
      const _0x13c942 = new URL(_0x46b821),
        _0x33afdd =
          'https://www.youtube.com/watch?v=' + _0x13c942.pathname.split('/')[2]
      this.download(_0x33afdd, false).then(_0x45678d).catch(_0x2e7d8f)
    })
  }
}
module.exports = { Youtube: Youtube }
