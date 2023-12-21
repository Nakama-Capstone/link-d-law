package com.nakama.capstone.linkdlaw.di

import com.nakama.capstone.linkdlaw.BuildConfig
import com.nakama.capstone.linkdlaw.preferences.SessionPreferences
import com.nakama.capstone.linkdlaw.remote.api.ApiService
import com.nakama.capstone.linkdlaw.repository.AuthRepository
import com.nakama.capstone.linkdlaw.repository.ChatRepository
import com.nakama.capstone.linkdlaw.repository.CommunityRepository
import com.nakama.capstone.linkdlaw.repository.HomeRepository
import com.nakama.capstone.linkdlaw.repository.LawRepository
import com.nakama.capstone.linkdlaw.repository.PengacaraRepository
import com.nakama.capstone.linkdlaw.screen.auth.login.LoginViewModel
import com.nakama.capstone.linkdlaw.screen.auth.register.RegisterViewModel
import com.nakama.capstone.linkdlaw.screen.chat.ChatViewModel
import com.nakama.capstone.linkdlaw.screen.daftarhukum.LawScreenViewModel
import com.nakama.capstone.linkdlaw.screen.forum.ForumScreenViewModel
import com.nakama.capstone.linkdlaw.screen.pengacara.PengacaraScreenViewModel
import com.nakama.capstone.linkdlaw.screen.pengacaraprofile.PengacaraProfileViewModel
import com.nakama.capstone.linkdlaw.screen.pesan.PesanScreenViewModel
import com.nakama.capstone.linkdlaw.screen.profile.EditProfileViewModel
import com.nakama.capstone.linkdlaw.screen.settings.SettingsViewModel
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.runBlocking
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import org.koin.android.ext.koin.androidContext
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object Injection {
    
    val apiModule = module {
        single {
            val dataStore: SessionPreferences = get()
            var token = ""
            
            runBlocking { 
                val userSession = dataStore.getUserSession().first()
                token = userSession.token
            }
            
            val loggingInterceptor = if (BuildConfig.DEBUG) {
                HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY)
            } else {
                HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.NONE)
            }
            
            
            
            val authInterceptor = Interceptor { chain ->
                val latestToken = runBlocking { dataStore.getUserSession().first().token }
                val req = chain.request()
                val requestHeaders = req.newBuilder()
                    .addHeader("Authorization", "Bearer $latestToken")
                    .build()
                chain.proceed(requestHeaders)
            }

            val client = OkHttpClient.Builder().addInterceptor(loggingInterceptor)
                .addInterceptor(authInterceptor)
                .build()

            Retrofit.Builder()
                .baseUrl(BuildConfig.BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .client(client)
                .build()
                .create(ApiService::class.java)
            
        }
    }
    
    val preferencesModule = module {
        single { SessionPreferences(androidContext()) }
    }
    
    val viewModelModule = module { 
        viewModel { LoginViewModel(get()) }
        viewModel { RegisterViewModel(get()) }
        viewModel { SettingsViewModel(get(),get()) }
        viewModel { EditProfileViewModel(get()) }
        viewModel{ ChatViewModel(get()) }
        viewModel{ PesanScreenViewModel(get()) }
        viewModel{ PengacaraProfileViewModel(get()) }
        viewModel{ PengacaraScreenViewModel(get()) }
        viewModel{ LawScreenViewModel(get()) }
        viewModel{ ForumScreenViewModel(get()) }
    }
    
    val repositoryModule = module { 
        single { AuthRepository(get(), get()) }
        single { HomeRepository(get()) }
        single { ChatRepository(get()) }
        single { PengacaraRepository(get()) }
        single { LawRepository(get()) }
        single { CommunityRepository(get()) }
    }
}