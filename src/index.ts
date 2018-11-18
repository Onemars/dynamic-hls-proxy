import { Playlist, PlaylistTypeFilter, RenditionSortOrder } from "./playlist";

const playlistUrl: string = 'http://stream-archive-input-test.s3.amazonaws.com/output/14ajhmZDE6Wi9ct9_qHDCWeukB15ssKO/playlist.m3u8';
const chunklistUrl: string = 'http://stream-archive-input-test.s3.amazonaws.com/output/14ajhmZDE6Wi9ct9_qHDCWeukB15ssKO/480p_1600k_v4.m3u8';

Playlist.loadFromUrl(playlistUrl).then(function (playlist: Playlist) {
    playlist
        .setBaseUrl("https://videos.flosports.net/")
        .setTypeFilter(PlaylistTypeFilter.VideoOnly)
        .sortByBandwidth(RenditionSortOrder.worstFirst)
        .setLimit(1);
    console.log(playlist.toString());
})
