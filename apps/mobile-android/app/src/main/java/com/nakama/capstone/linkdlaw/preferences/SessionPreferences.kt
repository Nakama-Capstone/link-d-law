package com.nakama.capstone.linkdlaw.preferences

import android.content.Context
import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.core.booleanPreferencesKey
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.stringPreferencesKey
import androidx.datastore.preferences.preferencesDataStore
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.map

private val Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = "user_session")
class SessionPreferences(private val context: Context) {
    
    fun getUserSession(): Flow<UserSession> {
        return context.dataStore.data.map { preferences ->
            UserSession(
                token = preferences[TOKEN_KEY] ?: "",
                isLogin = preferences[IS_LOGIN] ?: false
            )
        }
    }
    
    suspend fun getToken(): String {
        val preferences = context.dataStore.data.first()
        return preferences[TOKEN_KEY] ?: ""
    }
    
    suspend fun saveUserSession(userSession: UserSession) {
        context.dataStore.edit { preferences ->
            preferences[TOKEN_KEY] = userSession.token
            preferences[IS_LOGIN] = userSession.isLogin
        }
    }
    
    suspend fun clearUserSession() {
        context.dataStore.edit { preferences ->
            preferences.clear()
        }
    }
    
    companion object {
        private val TOKEN_KEY = stringPreferencesKey("token_key")
        private val IS_LOGIN = booleanPreferencesKey("login_key")
        
    }
    
}