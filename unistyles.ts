import { StyleSheet } from 'react-native-unistyles';

const lightTheme = {
	colors: {
		label: {
			/**
			 * The color for text labels that contain primary content.
			 */
			primary: 'rgba(0, 0, 0, 1)',
			/**
			 * The color for text labels that contain secondary content.
			 */
			secondary: 'rgba(61.2, 61.2, 66, 0.6)',
			/**
			 * The color for text labels that contain tertiary content.
			 */
			tertiary: 'rgba(61.2, 61.2, 66, 0.3)',
			/**
			 * The color for text labels that contain quaternary content.
			 */
			quaternary: 'rgba(61.2, 61.2, 66, 0.18)',
		},
		systemBackground: {
			/**
			 * The color for the main background of your interface.
			 */
			primary: 'rgba(255, 255, 255, 1)',
			/**
			 * The color for content layered on top of the main background.
			 */
			secondary: 'rgba(242.25, 242.25, 247.35, 1)',
			/**
			 * The color for content layered on top of secondary backgrounds.
			 */
			tertiary: 'rgba(255, 255, 255, 1)',
		},
	},
};

const darkTheme = {
	colors: {
		label: {
			/**
			 * The color for text labels that contain primary content.
			 */
			primary: 'rgba(256, 256, 256, 1)',
			/**
			 * The color for text labels that contain secondary content.
			 */
			secondary: 'rgba(234.6, 234.6, 244.8, 0.6)',
			/**
			 * The color for text labels that contain tertiary content.
			 */
			tertiary: 'rgba(234.6, 234.6, 244.8, 0.3)',
			/**
			 * The color for text labels that contain quaternary content.
			 */
			quaternary: 'rgba(234.6, 234.6, 244.8, 0.16)',
		},
		systemBackground: {
			/**
			 * The color for the main background of your interface.
			 */
			primary: 'rgba(0, 0, 0, 1)',
			/**
			 * The color for content layered on top of the main background.
			 */
			secondary: 'rgba(28.05, 28.05, 30.6, 1)',
			/**
			 * The color for content layered on top of secondary backgrounds.
			 */
			tertiary: 'rgba(43.35, 43.35, 46.35, 1)',
		},
	},
};

const appThemes = {
	light: lightTheme,
	dark: darkTheme,
};

const settings = {
	adaptiveThemes: true,
};

type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
	export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
	themes: appThemes,
	settings,
});
