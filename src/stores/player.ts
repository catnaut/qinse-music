import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { SongSchemaType } from "@/definitions/song";
import { PlaylistSchemaType } from "@/definitions/playlist";
import { clientFetcher } from "@/lib/api";

type Song = SongSchemaType;

type Playlist = PlaylistSchemaType;

type PlayerState = {
  state: "play" | "pause";
  song: Song | undefined;
  playlist: Playlist | undefined;
  time: number;
  progress: number;
  duration: number;
  volume: number;
};

type PlayerActions = {
  toggle: () => void;
  next: () => void;
  prev: () => void;
  muteToggle: () => void;
  setProgress: (progress: number) => void;
  setTime: (time: number) => void;
  increment: () => void;
  playSong: (songId: string) => void;
  removeSong: (songId: string) => void; // 暂时直接删除歌曲
  fetchSong: (songId: string) => Promise<void>;
};

const usePlayerStore = create<PlayerState & PlayerActions>()(
  devtools(
    persist(
      immer((set, get) => ({
        state: "pause",
        song: undefined,
        playlist: undefined,
        // 进度条拖拽时的时间, 用于显示, 与 progress 不同
        time: 0,
        // 音乐播放进度
        progress: 0,
        // 音乐总时长
        duration: 100,
        volume: 1,
        toggle: () => {
          set((state) => {
            state.state = state.state === "play" ? "pause" : "play";
          });
        },
        next: () => {},
        prev: () => {},
        muteToggle: () => {
          set((state) => {
            state.volume = state.volume === 0 ? 1 : 0;
          });
        },
        setTime(time) {
          set((state) => {
            state.time = time;
          });
        },
        setProgress: (progress) => {
          set((state) => {
            if (progress >= 0 && progress <= state.duration) {
              state.progress = progress;
            }
          });
        },
        increment: () => {
          set((state) => {
            state.time += 1;
            state.progress += 1;
          });
        },
        playSong: (id) => {
          get()
            .fetchSong(id)
            .then(() =>
              set((state) => {
                state.state = "play";
              }),
            );
        },
        removeSong: (id) => {
          set((state) => {
            state.song = undefined;
          });
        },
        fetchSong: async (id) => {
          const data = await clientFetcher<Song>(`/song/select/id?id=${id}`);
          set((state) => {
            state.song = data;
          });
        },
      })),
      {
        name: "counter",
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => !["state"].includes(key)),
          ),
        // getStorage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default usePlayerStore;
