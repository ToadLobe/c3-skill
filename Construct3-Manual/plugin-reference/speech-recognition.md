---
title: "Speech recognition"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/speech-recognition"
---

# Speech recognition

## On this page
- [Speech recognition conditions](#internalH1Link0)
- [Speech recognition actions](#internalH1Link1)
- [Speech recognition expressions](#internalH1Link2)

---
The **Speech recognition** object can transcribe text from the audio of the user talking in to a microphone.
Speech recognition may not be supported by all browsers or platforms. Use the *Supports speech recongition* condition to check if speech synthesis can be used.

> **Tip**  
> Starting speech recognition requires access to the user's microphone, which normally requires a permission prompt for security reasons. To avoid annoying the user, the permission prompt may also only be allowed to start in a user input trigger, such as *On button clicked* or *On touch started*.

### Scripting
This object has no script interface, because when using JavaScript or TypeScript coding you can use the browser built-in [Web Speech API](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fWeb_Speech_API).

## Speech recognition conditions
**Is recognising speech**  
True if a speech recognition request has been approved, and speech input through a microphone is actively being recognised.

**On end**  
Triggered after the *Stop speech recognition* action, or after the user stops speaking in *Single phrase* mode speech recognition.

**On error**  
Triggered if there is an error approving speech recognition, or during speech recognition. The *SpeechError* expression is set to a string which describes the type of problem, e.g. "not-allowed" if permission was declined.

**On result**  
Triggered during active speech recognition when the interim or final transcript has changed. Use either the *FinalTranscript* and/or the *InterimTranscript* expressions to get the updated result.

**On start**  
Triggered after *Request speech recognition* when the user has also approved any prompt for permission.

**Supports speech recognition**  
True if the current browser or platform supports speech recognition. If false, none of the speech recognition features of the object will work.

## Speech recognition actions
**Request speech recognition**  
If *Supports speech recognition* is true, initiates speech recognition. Usually a permission prompt will appear asking the user if they want to allow the page to use their microphone input. The user must approve the permission prompt before *On start* triggers. If there is a problem or permission is denied, *On error* is triggered. 
*Language* specifies the spoken language to recognize, as an IETF language tag. Use a tag like *en* for English, *en-US* for US English, *en-GB* for British English, and so on. 
*Mode* can be *continuous*, which keeps recognising speech until the page is closed or the *Stop speech recognition* is used; or *single phrase*, which recognises speech until the user stops talking, then automatically stops speech recognition and triggers *On end*. 
*Results* can be *Interim* to allow interim (unconfirmed) results which can change, accessed by the *InterimTranscript* expression; or *Final* to only allow confirmed final results of speech recognition to be returned which will not change, accessed by the *FinalTranscript* expression.

**Stop speech recognition**  
If speech recognition is currently active, ends the speech recognition. *On end* will trigger.

## Speech recognition expressions
**FinalTranscript**  
If speech recognition is active, returns the final transcript of confirmed results. This does not change, other than to add newly spoken words which have also been confirmed.

**InterimTranscript**  
If speech recognition is active, returns the interim transcript of results. The *Request speech recognition* action must have specified *Interim* for the *Results* parameter. The text of this expression can change, as the speech recognition engine uses the sound input in real-time to refine the results and correct any misinterpreted words. Once the user has spoken far enough for the speech recognition engine to be confident of a final result, the word will disappear from *InterimTranscript* and be appended to *FinalTranscript*.

**SpeechError**  
In *On speech recognition error*, contains a string which identifies the type of error. Possible values are: `"no-speech"`, `"aborted"`, `"audio-capture"`, `"network"`, `"not-allowed"`, `"service-not-allowed"`, `"bad-grammar"`, or `"language-not-supported"`. The most common errors are `"not-allowed"` if the user declined the permission prompt; `"audio-capture"` if no microphone is present; or `"network"` if the speech recognition is implemented by a remote server over the Internet which is currently unavailable.
