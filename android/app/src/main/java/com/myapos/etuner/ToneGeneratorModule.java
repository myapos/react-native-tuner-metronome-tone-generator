package com.reactnativetonegenerator;

import android.content.Context;
import android.media.AudioManager;
import android.media.ToneGenerator;
import android.os.Build;
import android.os.Handler;
import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import java.util.Map;
import java.util.HashMap;

@ReactModule(name = ToneGeneratorModule.NAME)
public class ToneGeneratorModule extends ReactContextBaseJavaModule {
    public static final String NAME = "ToneGenerator";
    private final ReactApplicationContext reactContext;
    private ToneGenerator toneGenerator = new ToneGenerator(AudioManager.STREAM_MUSIC, 100);

    public ToneGeneratorModule(ReactApplicationContext reactContext) {
      super(reactContext);
      this.reactContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    @ReactMethod
    public void configureTone(int streamType, int volume, Promise promise) {
      toneGenerator = new ToneGenerator(streamType, volume);
      promise.resolve(null);
    }

    @ReactMethod
    public void startTone(int toneType, int durationMs, Promise promise) {
      toneGenerator.stopTone();
      toneGenerator.startTone(toneType, durationMs);
      promise.resolve(null);
    }

    @ReactMethod
    public void stopTone(Promise promise) {
      toneGenerator.stopTone();
      promise.resolve(null);
    }

    @ReactMethod
    public void getStreamMinVolume(int streamType, Promise promise) {
      AudioManager audioManager = (AudioManager) reactContext.getSystemService(Context.AUDIO_SERVICE);
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
        promise.resolve(audioManager.getStreamMinVolume(streamType));
      } else {
        promise.resolve(null);
      }
    }

    @ReactMethod
    public void getStreamMaxVolume(int streamType, Promise promise) {
      AudioManager audioManager = (AudioManager) reactContext.getSystemService(Context.AUDIO_SERVICE);
      promise.resolve(audioManager.getStreamMaxVolume(streamType));
    }

    @ReactMethod
    public void getStreamVolume(int streamType, Promise promise) {
      AudioManager audioManager = (AudioManager) reactContext.getSystemService(Context.AUDIO_SERVICE);
      promise.resolve(audioManager.getStreamVolume(streamType));
    }

    @ReactMethod
    public void setStreamVolume(int streamType, int index, int flags, Promise promise) {
      AudioManager audioManager = (AudioManager) reactContext.getSystemService(Context.AUDIO_SERVICE);
      audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, index, flags);
      promise.resolve(null);
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DTMF_0", ToneGenerator.TONE_DTMF_0);
        constants.put("DTMF_1", ToneGenerator.TONE_DTMF_1);
        constants.put("DTMF_2", ToneGenerator.TONE_DTMF_2);
        constants.put("DTMF_3", ToneGenerator.TONE_DTMF_3);
        constants.put("DTMF_4", ToneGenerator.TONE_DTMF_4);
        constants.put("DTMF_5", ToneGenerator.TONE_DTMF_5);
        constants.put("DTMF_6", ToneGenerator.TONE_DTMF_6);
        constants.put("DTMF_7", ToneGenerator.TONE_DTMF_7);
        constants.put("DTMF_8", ToneGenerator.TONE_DTMF_8);
        constants.put("DTMF_9", ToneGenerator.TONE_DTMF_9);
        constants.put("DTMF_A", ToneGenerator.TONE_DTMF_A);
        constants.put("DTMF_B", ToneGenerator.TONE_DTMF_B);
        constants.put("DTMF_C", ToneGenerator.TONE_DTMF_C);
        constants.put("DTMF_D", ToneGenerator.TONE_DTMF_D);
        constants.put("DTMF_STAR", ToneGenerator.TONE_DTMF_S);
        constants.put("DTMF_POUND", ToneGenerator.TONE_DTMF_P);
        constants.put("DTMF_S", ToneGenerator.TONE_DTMF_S);
        constants.put("DTMF_P", ToneGenerator.TONE_DTMF_P);
        return constants;
    }

    public static native int nativeConfigureTone(int streamType, int volume);
    public static native int nativeStartTone(int toneType, int durationMs);
    public static native int nativeStopTone();
    public static native int nativeGetStreamMinVolume(int streamType);
    public static native int nativeGetStreamMaxVolume(int streamType);
    public static native int nativeGetStreamVolume(int streamType);
    public static native int nativeSetStreamVolume(int streamType, int index, int flags);

}