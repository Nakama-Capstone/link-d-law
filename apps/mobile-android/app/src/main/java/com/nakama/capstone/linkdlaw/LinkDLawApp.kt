package com.nakama.capstone.linkdlaw

import android.app.Application
import com.nakama.capstone.linkdlaw.di.Injection
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger
import org.koin.core.context.startKoin
import org.koin.core.logger.Level

class LinkDLawApp : Application() {

    override fun onCreate() {
        super.onCreate()

        startKoin {
            androidLogger(Level.ERROR)
            androidContext(this@LinkDLawApp)

            modules(
                Injection.apiModule,
                Injection.preferencesModule,
                Injection.repositoryModule,
                Injection.viewModelModule
            )
        }
    }

}