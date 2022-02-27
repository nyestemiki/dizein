import React from 'react'
import map from 'lodash/map'
import { Select, Toggle } from './settings/'
import { Wrapper, InnerWrapper, SettingItem } from './settings/styles'

export const settingTypes = { SELECT: 'select', TOGGLE: 'toggle' }

const Settings = ({ settings }) => {
	return (
		<Wrapper>
			<h2>Settings</h2>
			<InnerWrapper>
				{map(settings, (setting, index) => {
					if (setting.type === settingTypes.SELECT) {
						return (
							<SettingItem key={index}>
								<span>{setting.name}</span>
								<Select
									options={setting.values}
									onChanged={setting.onSettingChanged}
									selection={setting.selection}
								/>
							</SettingItem>
						)
					} else if (setting.type === settingTypes.TOGGLE) {
						return (
							<SettingItem key={index}>
								<span>{setting.name}</span>
								<Toggle
									active={setting.selection}
									onChanged={setting.onSettingChanged}
								/>
							</SettingItem>
						)
					}
				})}
			</InnerWrapper>
		</Wrapper>
	)
}

export default Settings
