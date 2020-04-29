import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login, logout, getUserInfo } from '@/api/users'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { PermissionModule } from './permission'
import { TagsViewModule } from './tags-view'
import store from '@/store'

export interface IMusicState {
  // audiosPage: [] 
  // musicPage: IMusicPage[]
  musicPage: {
    url: string,
    uploader: string,
    play: boolean
  }
  playasb: boolean
}

interface IMusicPage {
  url: string,
  uploader: string,
  play: boolean
}

@Module({ dynamic: true, store, name: 'music' })
class Music extends VuexModule implements IMusicState {
  public token = getToken() || ''
  //   public audiosPage = []  // 音乐的内容 
  //   public musicPage = []
  // public musicPage: IMusicPage[] = []

  public musicPage = {
    url: '',
    uploader: '',
    play: false
  }
  public playasb = true;


  @Mutation
  public SET_TOKEN(token: string) {
    this.token = token
  }


  @Mutation
  private SET_MusicPage(data: any) {
    // console.log(data)
    this.musicPage = data;
  }

  @Mutation
  SET_MUSIC_STATE(play: any) {
    this.playasb = play;
    // console.log(this.playasb)
  }

  @Action
  public async MusicPage(data: any) {
    this.SET_MusicPage(data)
  }

  @Action
  public async Login(userInfo: { username: string, password: string }) {
    let { username, password } = userInfo
    username = username.trim()
    const { data } = await login({ username, password })
    setToken(data.accessToken)
    this.SET_TOKEN(data.accessToken)
  }



  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    await logout()
    removeToken()
    resetRouter()

    // Reset visited views and cached views
    TagsViewModule.delAllViews()
    this.SET_TOKEN('')
  }
}

export const MusicModule = getModule(Music)